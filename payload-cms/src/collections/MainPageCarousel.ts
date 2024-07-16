import { CollectionConfig } from 'payload/types'

const MainPageCarousel: CollectionConfig = {
    slug: 'main-page-carousel',
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

export default MainPageCarousel