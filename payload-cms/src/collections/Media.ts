import { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
      },
      {
        name: 'preview',
        width: 800,
        height: 800,
        formatOptions: {
          format: 'webp',
        },
        withoutEnlargement: true,
      },
      {
        name: 'landscape',
        width: 2880,
        height: 2160,
        formatOptions: {
          format: 'webp',
        },
        withoutEnlargement: true,
      },
      {
        name: 'portrait',
        width: 2160,
        height: 2880,
        formatOptions: {
          format: 'webp',
        },
        withoutEnlargement: true,
      },
      {
        name: 'square',
        width: 2160,
        height: 2160,
        formatOptions: {
          format: 'webp',
        },
        withoutEnlargement: true,
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],

  timestamps: true,
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
};
