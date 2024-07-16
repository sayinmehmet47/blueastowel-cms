import { CollectionConfig } from "payload/types";

const AboutUs: CollectionConfig = {
  slug: 'about-us',
  fields: [
    {
      name: 'owners',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
    {
      name: 'about',
      type: 'richText',
      required: true,
    },
  ],

};

export default AboutUs