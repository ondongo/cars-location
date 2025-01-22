import { Vehicle } from "@/models/vehicle";
import { FirebaseRepository } from "./FirebaseRepository";
import { IVehicleRepository } from "./IVehicleRepository";


export class FirebaseVehicleRepository extends FirebaseRepository<Vehicle> implements IVehicleRepository {
  constructor() {
    // Spécifie la collection "vehicles" et la fonction de transformation
    super("vehicles", (id, data) => new Vehicle(
      id,
      data.category,
      data.subcategory,
      data.type,
      data.brand,
      data.model,
      data.year,
      data.pricePerDay,
      data.availability,
      data.features,
      data.location,
      data.images
    ));
  }
}
