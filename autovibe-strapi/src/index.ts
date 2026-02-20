import type { Core } from '@strapi/strapi';
import { AsyncLocalStorage } from 'async_hooks';
import path from 'path';

// Car cover images (image, image_compra, image_empresas) are compressed to max 512KB; additionalImages are unchanged
const UPLOAD_CONTEXT = new AsyncLocalStorage<{ ref?: string; field?: string }>();

const CAR_IMAGE_FIELDS = ['image', 'image_compra', 'image_empresas'];

function isCarCoverImage(store: { ref?: string; field?: string } | undefined) {
  return store?.ref === 'api::car.car' && store?.field && CAR_IMAGE_FIELDS.includes(store.field);
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const uploadPlugin = strapi.plugin('upload');
    const uploadService = uploadPlugin.service('upload');
    const imageManipulationService = uploadPlugin.service('image-manipulation');
    if (!uploadService || !imageManipulationService) return;

    const compressPath = path.join(process.cwd(), 'src', 'extensions', 'upload', 'compress-to-max-size.js');
    const { compressToMaxSize, MAX_SIZE_BYTES } = require(compressPath);

    const originalUpload = uploadService.upload.bind(uploadService);
    uploadService.upload = async function uploadWithContext(
      params: { data: Record<string, unknown>; files: unknown[] },
      opts?: unknown
    ) {
      const ref = params.data?.ref as string | undefined;
      const field = params.data?.field as string | undefined;
      return UPLOAD_CONTEXT.run({ ref, field }, () => originalUpload(params, opts));
    };

    const originalOptimize = imageManipulationService.optimize.bind(imageManipulationService);
    imageManipulationService.optimize = async function optimizeWithCarLimit(file: unknown) {
      const optimized = await originalOptimize(file);
      const store = UPLOAD_CONTEXT.getStore();
      if (isCarCoverImage(store)) {
        return compressToMaxSize(optimized, MAX_SIZE_BYTES);
      }
      return optimized;
    };
  },
};
