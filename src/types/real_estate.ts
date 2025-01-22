export interface RealEstate {
    id: string;
    category: string;
    type: string;
    status: string;
    location: {
      city: string;
      neighborhood: string;
    };
    price: number;
    features: {
      bedrooms: number;
      bathrooms: number;
      surface: string;
      furnished: boolean;
    };
    images: string[];
    availability: string;
  }