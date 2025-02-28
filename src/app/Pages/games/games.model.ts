export interface Game {
    _id: string;
    title: string;
    description: string;
    price: number;
    discount: number;
    quantity: number;
    platform: string;
    publisher: string;
    releaseDate: string;
    category: string;
    imageCover: string;
    images: string[]; 
    createdAt: string;
    updatedAt: string;
  }
  