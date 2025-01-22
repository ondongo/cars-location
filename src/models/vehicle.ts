export class Vehicle {
    constructor(
      public id: string,
      public category: string,
      public subcategory: string,
      public type: string,
      public brand: string,
      public model: string,
      public year: number,
      public pricePerDay: number,
      public availability: string,
      public features: {
        mileage: string;
        fuel: string;
        transmission: string;
        seats: number;
      },
      public location: {
        city: string;
        neighborhood: string;
      },
      public images: string[] = []
    ) {}
  }