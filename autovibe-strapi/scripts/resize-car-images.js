#!/usr/bin/env node
'use strict';

/**
 * Скрипт находит все изображения, привязанные к полям Car:
 * image, image_compra, image_empresas — и сжимает их до ≤512 КБ.
 * Запуск: yarn dev:resize (из папки autovibe-strapi)
 */

const path = require('path');
const fs = require('fs');
const os = require('os');

// Запуск из корня Strapi-приложения (autovibe-strapi)
const appRoot = path.resolve(__dirname, '..');
process.chdir(appRoot);

const { createStrapi } = require('@strapi/strapi');
const { compressToMaxSize, MAX_SIZE_BYTES } = require(path.join(appRoot, 'src', 'extensions', 'upload', 'compress-to-max-size.js'));

const CAR_IMAGE_FIELDS = ['image', 'image_compra', 'image_empresas'];
const FILE_MODEL_UID = 'plugin::upload.file';
const CAR_MODEL_UID = 'api::car.car';

function getFileId(value) {
  if (value == null) return null;
  if (typeof value === 'object' && value.id != null) return value.id;
  if (typeof value === 'object' && value.documentId != null) return value.documentId;
  if (Array.isArray(value) && value.length > 0) {
    const first = value[0];
    return (first && (first.id ?? first.documentId)) || null;
  }
  return null;
}

async function optimizeOneFile(strapi, fileId, uploadsDir) {
  let file = await strapi.db.query(FILE_MODEL_UID).findOne({
    where: { id: fileId },
  });
  if (!file && typeof fileId === 'string') {
    file = await strapi.db.query(FILE_MODEL_UID).findOne({
      where: { documentId: fileId },
    });
  }
  if (!file) return { status: 'skip', reason: 'no file' };
  const hash = file.hash ?? file.documentId;
  const ext = file.ext || '.jpg';
  const filePk = file.id ?? file.documentId;
  if (!hash) return { status: 'skip', reason: 'no hash' };

  const sizeInBytes = file.sizeInBytes ?? (file.size != null ? Math.round(Number(file.size) * 1024) : null);
  if (sizeInBytes != null && sizeInBytes <= MAX_SIZE_BYTES) {
    return { status: 'skip', reason: 'already small' };
  }

  const filePath = path.join(uploadsDir, `${hash}${ext}`);
  if (!fs.existsSync(filePath)) {
    console.warn(`  [skip] File not found: ${filePath}`);
    return { status: 'error', reason: 'file not found' };
  }

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'car-resize-'));
  try {
    const fileObj = {
      ...file,
      hash,
      ext,
      filepath: filePath,
      tmpWorkingDirectory: tmpDir,
      getStream: () => fs.createReadStream(filePath),
    };
    const compressed = await compressToMaxSize(fileObj, MAX_SIZE_BYTES);

    const outPath = compressed.filepath;
    const newExt = path.extname(outPath);
    const newUrl = `/uploads/${hash}${newExt}`;

    if (newExt.toLowerCase() !== ext.toLowerCase()) {
      const destPath = path.join(uploadsDir, `${hash}${newExt}`);
      fs.copyFileSync(outPath, destPath);
      try {
        fs.unlinkSync(filePath);
      } catch (_) {}
      await strapi.db.query(FILE_MODEL_UID).update({
        where: { id: filePk },
        data: {
          url: newUrl,
          ext: newExt,
          mime: compressed.mime,
          size: compressed.size,
          sizeInBytes: compressed.sizeInBytes,
        },
      });
    } else {
      fs.copyFileSync(outPath, filePath);
      await strapi.db.query(FILE_MODEL_UID).update({
        where: { id: filePk },
        data: {
          size: compressed.size,
          sizeInBytes: compressed.sizeInBytes,
        },
      });
    }

    const before = file.sizeInBytes ?? sizeInBytes;
    console.log(`  [ok] ${path.basename(filePath)}  ${before} → ${compressed.sizeInBytes} bytes`);
    return { status: 'ok' };
  } catch (err) {
    console.error(`  [error] ${filePath}:`, err.message);
    return { status: 'error', reason: err.message };
  } finally {
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch (_) {}
  }
}

async function run() {
  console.log('Resize Car images: loading Strapi...');
  const strapi = createStrapi();

  try {
    await strapi.load();
  } catch (err) {
    console.error('Failed to load Strapi:', err);
    process.exit(1);
  }

  const uploadsDir = path.join(strapi.dirs.static.public, 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    console.error('Uploads directory not found:', uploadsDir);
    await strapi.destroy();
    process.exit(1);
  }

  console.log('Finding cars with image, image_compra, image_empresas...');

  let cars;
  try {
    cars = await strapi.db.query(CAR_MODEL_UID).findMany({
      populate: CAR_IMAGE_FIELDS,
    });
  } catch (err) {
    console.error('Failed to load cars:', err);
    await strapi.destroy();
    process.exit(1);
  }

  const seenIds = new Set();
  let processed = 0;
  let skipped = 0;
  let errors = 0;

  for (const car of cars) {
    for (const fieldName of CAR_IMAGE_FIELDS) {
      const fileId = getFileId(car[fieldName]);
      if (fileId == null || seenIds.has(fileId)) {
        if (fileId == null) skipped++;
        continue;
      }
      seenIds.add(fileId);
      const result = await optimizeOneFile(strapi, fileId, uploadsDir);
      if (result.status === 'ok') processed++;
      else if (result.status === 'error') errors++;
      else skipped++;
    }
  }

  console.log('');
  console.log(`Done. Processed: ${processed}, Skipped: ${skipped}, Errors: ${errors}`);

  await strapi.destroy();
  process.exit(errors > 0 ? 1 : 0);
}

run();
