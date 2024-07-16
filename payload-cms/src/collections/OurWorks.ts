import { CollectionConfig } from 'payload/types'

const OurWorks: CollectionConfig = {
    slug: 'our-works',
    fields: [
        {
        name: 'title',
        type: 'text',
        required: true,
        },
        {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
        required: true,
        },
    ],
    admin: {
        useAsTitle: 'title',
    },
    }

export default OurWorks