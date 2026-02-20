'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { file: fileUtils } = require('@strapi/utils');

const { bytesToKbytes } = fileUtils;

const MAX_SIZE_BYTES = 512 * 1024; // 512 KB

const FORMATS_OPTIMIZABLE = ['jpeg', 'jpg', 'png', 'webp', 'avif', 'tiff'];

/**
 * Compress an UploadableFile so its size is <= maxSizeInBytes.
 * Only applies to optimizable image formats. Returns the same file if already small enough
 * or format is not supported.
 *
 * @param {object} file - Strapi UploadableFile (filepath, getStream, ext, mime, hash, name, tmpWorkingDirectory, etc.)
 * @param {number} maxSizeInBytes - max file size in bytes (default 512KB)
 * @returns {Promise<object>} - New file object with updated filepath, getStream, size, sizeInBytes, width, height
 */
async function compressToMaxSize(file, maxSizeInBytes = MAX_SIZE_BYTES) {
  const ext = (file.ext || '').toLowerCase().replace(/^\./, '');
  const format = ext === 'jpg' ? 'jpeg' : ext;
  if (!FORMATS_OPTIMIZABLE.includes(format)) {
    return file;
  }

  const inputPath = file.filepath;
  const sizeInBytes = file.sizeInBytes ?? (file.size != null ? Math.round(file.size * 1024) : null);
  if (sizeInBytes != null && sizeInBytes <= maxSizeInBytes) {
    return file;
  }

  if (!inputPath) {
    return file;
  }

  const tmpDir = file.tmpWorkingDirectory || path.dirname(inputPath);
  const baseOutputPath = path.join(tmpDir, `car-image-${file.hash}`);

  const metadata = await sharp(inputPath).metadata();
  const { width: origWidth, height: origHeight } = metadata;

  const tries = [
    { quality: 82, maxWidth: 1920 },
    { quality: 72, maxWidth: 1920 },
    { quality: 62, maxWidth: 1600 },
    { quality: 52, maxWidth: 1280 },
    { quality: 45, maxWidth: 1024 },
    { quality: 38, maxWidth: 800 },
    { quality: 32, maxWidth: 640 },
  ];

  for (const { quality, maxWidth } of tries) {
    const w = origWidth && origHeight && origWidth > origHeight ? Math.min(origWidth, maxWidth) : null;
    const h = origWidth && origHeight && origWidth <= origHeight ? Math.min(origHeight, maxWidth) : null;

    let pipeline = sharp(inputPath).resize(w || undefined, h || undefined, { fit: 'inside', withoutEnlargement: true });

    if (format === 'jpeg' || format === 'jpg') {
      pipeline = pipeline.jpeg({ quality, mozjpeg: true });
    } else if (format === 'webp') {
      pipeline = pipeline.webp({ quality });
    } else if (format === 'png') {
      pipeline = pipeline.png({ compressionLevel: 9, quality });
    } else if (format === 'avif') {
      pipeline = pipeline.avif({ quality });
    } else if (format === 'tiff') {
      pipeline = pipeline.tiff({ compression: 'lzw', quality });
    } else {
      continue;
    }

    const { data, info } = await pipeline.toBuffer({ resolveWithObject: true });
    if (data.length <= maxSizeInBytes) {
      const outPath = `${baseOutputPath}${path.extname(inputPath)}`;
      fs.writeFileSync(outPath, data);
      const newFile = { ...file };
      newFile.filepath = outPath;
      newFile.getStream = () => fs.createReadStream(outPath);
      newFile.sizeInBytes = data.length;
      newFile.size = bytesToKbytes(data.length);
      newFile.width = info.width;
      newFile.height = info.height;
      return newFile;
    }
  }

  // Last resort: convert to JPEG with aggressive compression
  const jpegPath = `${baseOutputPath}.jpg`;
  const last = await sharp(inputPath)
    .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 35, mozjpeg: true })
    .toBuffer({ resolveWithObject: true });

  fs.writeFileSync(jpegPath, last.data);
  const newFile = { ...file };
  newFile.filepath = jpegPath;
  newFile.getStream = () => fs.createReadStream(jpegPath);
  newFile.ext = '.jpg';
  newFile.mime = 'image/jpeg';
  newFile.sizeInBytes = last.data.length;
  newFile.size = bytesToKbytes(last.data.length);
  newFile.width = last.info.width;
  newFile.height = last.info.height;
  return newFile;
}

module.exports = { compressToMaxSize, MAX_SIZE_BYTES };
