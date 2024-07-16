import { CollectionConfig } from 'payload/types';

const MainPageAccordion: CollectionConfig = {
  slug: 'accordion',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'value',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
};

export default MainPageAccordion;