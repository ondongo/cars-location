import { Vehicle } from "@/models/vehicle";
import { FirebaseVehicleRepository } from "@/repositories/FirebaseVehicleRepository";
import { VehicleService } from "@/services/VehicleService";

const vehicleRepository = new FirebaseVehicleRepository();
const vehicleService = new VehicleService(vehicleRepository);

export const VehicleController = {
  async getAllVehicles(): Promise<Vehicle[]> {
    return await vehicleService.findAll();
  },

  async getVehicleById(id: string): Promise<Vehicle | null> {
    return await vehicleService.findById(id);
  },

  async createVehicle(vehicleData: Vehicle): Promise<void> {
    return await vehicleService.save(vehicleData);
  },

  async deleteVehicle(id: string): Promise<void> {
    return await vehicleService.delete(id);
  },


};
