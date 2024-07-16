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
      name: 'infoContent',
      type: 'richText',
      required: true,
    },
    {
      name: 'fashionistaContent',
      type: 'richText',
      required: true,
    },
  ],
};

export default MainPage;
