'use strict';

/**
 * Вставьте этот код в Strapi Console (npm run console) для однократной
 * оптимизации изображений Car (image, image_compra, image_empresas) до ≤512 КБ.
 * Требует: запуск из корня autovibe-strapi.
 */

const path = require('path');
const fs = require('fs');
const os = require('os');
const { compressToMaxSize, MAX_SIZE_BYTES } = require('../src/extensions/upload/compress-to-max-size.js');

const uploadsDir = path.join(strapi.dirs.static.public, 'uploads');
const FILE_MODEL_UID = 'plugin::upload.file';
const CAR_IMAGE_FIELDS = ['image', 'image_compra', 'image_empresas'];

function getImageId(value) {
  if (!value) return null;
  if (typeof value === 'object' && value.id != null) return value.id;
  if (Array.isArray(value) && value[0]?.id != null) return value[0].id;
  return null;
}

async function optimizeOneFile(fileId, fieldName) {
  const file = await strapi.db.query(FILE_MODEL_UID).findOne({
    where: { id: fileId },
  });
  if (!file || !file.hash) return { status: 'skip' };
  if (file.sizeInBytes != null && file.sizeInBytes <= MAX_SIZE_BYTES) return { status: 'skip' };

  const filePath = path.join(uploadsDir, `${file.hash}${file.ext}`);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return { status: 'error' };
  }

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'car-opt-'));
  try {
    const fileObj = {
      ...file,
      filepath: filePath,
      tmpWorkingDirectory: tmpDir,
      getStream: () => fs.createReadStream(filePath),
    };
    const compressed = await compressToMaxSize(fileObj, MAX_SIZE_BYTES);

    const outPath = compressed.filepath;
    const newExt = path.extname(outPath);
    const newUrl = `/uploads/${file.hash}${newExt}`;

    if (newExt.toLowerCase() !== (file.ext || '').toLowerCase()) {
      const destPath = path.join(uploadsDir, `${file.hash}${newExt}`);
      fs.copyFileSync(outPath, destPath);
      try { fs.unlinkSync(filePath); } catch (_) {}
      await strapi.db.query(FILE_MODEL_UID).update({
        where: { id: file.id },
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
        where: { id: file.id },
        data: {
          size: compressed.size,
          sizeInBytes: compressed.sizeInBytes,
        },
      });
    }
    console.log(`Optimized ${fieldName} file ${file.id}: ${file.sizeInBytes} -> ${compressed.sizeInBytes} bytes`);
    return { status: 'ok' };
  } catch (err) {
    console.error(`Error optimizing file ${file.id} (${fieldName}):`, err);
    return { status: 'error' };
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

async function optimizeExistingCarImages() {
  const cars = await strapi.documents('api::car.car').findMany({
    populate: { image: true, image_compra: true, image_empresas: true },
  });
  let processed = 0;
  let skipped = 0;
  let errors = 0;
  const seenFileIds = new Set();

  for (const car of cars) {
    for (const fieldName of CAR_IMAGE_FIELDS) {
      const imageId = getImageId(car[fieldName]);
      if (!imageId || seenFileIds.has(imageId)) {
        if (!imageId) skipped++;
        continue;
      }
      seenFileIds.add(imageId);
      const result = await optimizeOneFile(imageId, fieldName);
      if (result.status === 'ok') processed++;
      else if (result.status === 'error') errors++;
      else skipped++;
    }
  }

  console.log(`Done. Processed: ${processed}, Skipped: ${skipped}, Errors: ${errors}`);
  return { processed, skipped, errors };
}

optimizeExistingCarImages();
