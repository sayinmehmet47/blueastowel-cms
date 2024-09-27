import { CollectionConfig } from 'payload/types';

const Partners: CollectionConfig = {
  slug: 'partners',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};

export default Partners;
