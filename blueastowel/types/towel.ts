// Define the types for the response data
export interface TowelImage {
  url: string; // Assuming the image object has a url, adjust according to actual structure
}

export interface Towel {
  id: string;
  name: string;
  description: string;
  image: TowelImage;
  price: number;
  category: 'beach' | 'bath';
  createdAt: string;
  updatedAt: string;
}

export interface TowelsResponse {
  docs: Towel[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
}
