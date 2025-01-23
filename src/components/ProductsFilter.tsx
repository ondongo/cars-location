import { useState } from "react";

import RangeSlider from "./RangeSlider";

import { FaCalendarAlt, FaStar } from "react-icons/fa";


interface ProductsFilterProps {
  filters: {
    apartments: boolean;
    vehicles: boolean;
    furnitures: boolean;
    electronics: boolean;
  };
  checkboxHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  priceRange: { min: number; max: number };
  priceRangeHandler: (value: { min: number; max: number }) => void;
  location: string;
  locationHandler: (location: string) => void;
  className?: string;
  filterToggle: boolean;
  filterToggleHandler: () => void;
}

const ProductsFilter: React.FC<ProductsFilterProps> = ({
  filters,
  checkboxHandler,
  priceRange,
  priceRangeHandler,
  location,
  locationHandler,
  className,
  filterToggle,
  filterToggleHandler,
}) => {
  const [availability, setAvailability] = useState<string>("all");
  const [rating, setRating] = useState<number>(0);

  return (
    <div
      className={`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-[#FAFAFA] shadow-sm px-[30px] pt-[40px] rounded-lg ${
        className || ""
      }  ${filterToggle ? "block" : "hidden lg:block"}`}
    >
      {/* Title */}

      {/* Categories */}
     {/*  <div className="filter-subject-item pb-4 border-b border-gray-300">
        <div className="subject-title mb-[20px]">
          <h1 className="text-black text-base font-semibold">
            Filtrer par catégories
          </h1>
        </div>
        <div className="filter-items">
          <ul>
            <li className="item flex justify-between items-center mb-5">
              <div className="flex space-x-[14px] items-center">
                <Checkbox
                  id="apartments"
                  name="apartments"
                  handleChange={checkboxHandler}
                  checked={filters.apartments}
                />
                <label
                  htmlFor="apartments"
                  className="text-sm font-medium capitalize"
                >
                  Electrique
                </label>
              </div>
            </li>
            <li className="item flex justify-between items-center mb-5">
              <div className="flex space-x-[14px] items-center">
                <Checkbox
                  id="vehicles"
                  name="vehicles"
                  handleChange={checkboxHandler}
                  checked={filters.vehicles}
                />
                <label
                  htmlFor="vehicles"
                  className="text-sm font-medium capitalize"
                >
                  Hybride
                </label>
              </div>
            </li>
            <li className="item flex justify-between items-center mb-5">
              <div className="flex space-x-[14px] items-center">
                <Checkbox
                  id="furnitures"
                  name="furnitures"
                  handleChange={checkboxHandler}
                  checked={filters.furnitures}
                />
                <label
                  htmlFor="furnitures"
                  className="text-sm font-medium capitalize"
                >
                  Essence
                </label>
              </div>
            </li>

            <li className="item flex justify-between items-center mb-5">
              <div className="flex space-x-[14px] items-center">
                <Checkbox
                  id="furnitures"
                  name="furnitures"
                  handleChange={checkboxHandler}
                  checked={filters.furnitures}
                />
                <label
                  htmlFor="furnitures"
                  className="text-sm font-medium capitalize"
                >
                  Diesel
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
 */}
      <div className="pb-6 border-b border-gray-300">
        <h1 className="text-black text-base font-semibold mb-[20px]">
          Disponibilité
        </h1>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="availability"
              value="all"
              checked={availability === "all"}
              onChange={() => setAvailability("all")}
              className="form-radio h-4 w-4 text-accent"
            />
            <span className="text-sm text-gray-800">Tous</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="availability"
              value="available"
              checked={availability === "available"}
              onChange={() => setAvailability("available")}
              className="form-radio h-4 w-4 text-accent"
            />
            <span className="text-sm text-gray-800">Disponible</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="availability"
              value="unavailable"
              checked={availability === "unavailable"}
              onChange={() => setAvailability("unavailable")}
              className="form-radio h-4 w-4 text-accent"
            />
            <span className="text-sm text-gray-800">Indisponible</span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="pb-6 border-b border-gray-300 mt-10">
        <div className="mb-[20px]">
          <h1 className="text-black text-base font-semibold">
            Filtrer par prix
          </h1>
        </div>
        <div className="">
          <RangeSlider />
        </div>
      </div>


      {/* Filtrer par étoiles */}
      <div className="pb-4 border-b border-gray-300">
        <h1 className="text-black text-base font-semibold my-4">Évaluation</h1>
        <div className="flex space-x-2 ">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={`cursor-pointer ${
                rating > i ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="filter-subject-item pb-4 border-b mt-10">
        <div className="subject-title mb-[20px]">
          <h1 className="text-black text-base font-semibold">Localisation</h1>
        </div>
        <div className="filter-items">
          <ul>
            <li className="item flex justify-between items-center mb-5">
              <div
                onClick={() => locationHandler("Brazzaville")}
                className={`text-sm font-medium capitalize cursor-pointer ${
                  location === "Brazzaville" ? "text-qyellow font-bold" : ""
                }`}
              >
                Brazzaville
              </div>
            </li>
            <li className="item flex justify-between items-center mb-5">
              <div
                onClick={() => locationHandler("Pointe-Noire")}
                className={`text-sm font-medium capitalize cursor-pointer ${
                  location === "Pointe-Noire" ? "text-qyellow font-bold" : ""
                }`}
              >
                Pointe-Noire
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
