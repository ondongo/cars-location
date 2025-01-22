export interface Vehicle {
  id: string;
  category: string;
  subcategory: string;
  type: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  availability: string;
  features: {
    mileage: string;
    fuel: string;
    transmission: string;
    seats: number;
  };
  location: {
    city: string;
    neighborhood: string;
  };
  images: string[];
}
