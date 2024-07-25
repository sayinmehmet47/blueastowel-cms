// collections/Towels.js
import { CollectionConfig } from 'payload/types';

const Towels: CollectionConfig = {
  slug: 'towels',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Bath Towels', value: 'bath' },
        { label: 'Hand Towels', value: 'hand' },
        { label: 'Beach Towels', value: 'beach' },
      ],
      required: true,
    },
  ],
};

export default Towels;
