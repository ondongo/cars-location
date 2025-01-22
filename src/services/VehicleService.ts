import { Vehicle } from "@/models/vehicle";
import { IVehicleRepository } from "@/repositories/IVehicleRepository";

export class VehicleService implements IVehicleRepository {
  constructor(private repository: IVehicleRepository) {}

  async findAll(): Promise<Vehicle[]> {
    return this.repository.findAll();
  }

  async findById(id: string): Promise<Vehicle | null> {
    return this.repository.findById(id);
  }

  async save(vehicle: Vehicle): Promise<void> {
    return this.repository.save(vehicle);
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}
