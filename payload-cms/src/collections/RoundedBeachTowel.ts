import { CollectionConfig } from 'payload/types'

const RoundedBeachTowels: CollectionConfig = {
    slug: 'rounded-beach-towel',
    fields: [
        {
        name: 'title',
        type: 'text',
        required: true,
        },
        {
            name: 'description',
            type: 'richText',
            required: false,
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
    access: {
        read: () => true,
    },
    }

export default RoundedBeachTowels