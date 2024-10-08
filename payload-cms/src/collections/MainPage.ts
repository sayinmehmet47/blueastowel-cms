import { CollectionConfig } from 'payload/types';

const MainPage: CollectionConfig = {
  slug: 'main-page',
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'heroSubtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'infoContent',
      type: 'richText',
      required: false,
    },
    {
      name: 'fashionistaContent',
      type: 'richText',
      required: false,
    },
  ],
};

export default MainPage;
