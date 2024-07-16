export interface AboutUs {
    docs: Doc[]
    totalDocs: number
    limit: number
    totalPages: number
    page: number
    pagingCounter: number
    hasPrevPage: boolean
    hasNextPage: boolean
    prevPage: any
    nextPage: any
  }
  
  export interface Doc {
    id: string
    owners: Owner[]
    about: About[]
    createdAt: string
    updatedAt: string
  }
  
  export interface Owner {
    name: string
    role: string
    image: Image
    id: string
  }
  
  export interface Image {
    id: string
    filename: string
    mimeType: string
    filesize: number
    width: number
    height: number
    focalX: number
    focalY: number
    sizes: Sizes
    createdAt: string
    updatedAt: string
    url: string
  }
  
  export interface Sizes {
    thumbnail: Thumbnail
    card: Card
    tablet: Tablet
  }
  
  export interface Thumbnail {
    width: number
    height: number
    mimeType: string
    filesize: number
    filename: string
    url: string
  }
  
  export interface Card {
    width: number
    height: number
    mimeType: string
    filesize: number
    filename: string
    url: string
  }
  
  export interface Tablet {
    width: number
    height: number
    mimeType: string
    filesize: number
    filename: string
    url: string
  }
  
  export interface About {
    children: Children[]
  }
  
  export interface Children {
    text: string
    bold?: boolean
    underline?: boolean
  }
  