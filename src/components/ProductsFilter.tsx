import RangeSlider from "react-range-slider-input";
import Checkbox from "./helpers/CheckBox";

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
  return (
    <div
      className={`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-[#FAFAFA] shadow-sm px-[30px] pt-[40px] rounded-lg ${
        className || ""
      }  ${filterToggle ? "block" : "hidden lg:block"}`}
    >
      {/* Title */}
      <div className="subject-title mb-[30px]">
        <h1 className="text-black text-base font-bold">Filtres de recherche</h1>
      </div>

      {/* Categories */}
      <div className="filter-subject-item pb-10 border-b border-gray-300">
        <div className="subject-title mb-[20px]">
          <h1 className="text-black text-base font-semibold">
            Catégories de véhicules
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

      {/* Price Range */}
      <div className="pb-10 border-b border-gray-300 mt-10">
        <div className="s mb-[20px]">
          <h1 className="text-black text-base font-semibold">Prix</h1>
        </div>
        <div className="mb-5">
          <RangeSlider
            value={[priceRange.min, priceRange.max]}
            onInput={(value: [number, number]) =>
              priceRangeHandler({ min: value[0], max: value[1] })
            }
            min={10}
            max={1000}
          />
        </div>
        <p className="text-sm text-gray-600">
          Prix : {priceRange.min} XOF - {priceRange.max} XOF
        </p>
      </div>

      {/* Locations */}
      <div className="filter-subject-item pb-10 border-b border-gray-300 mt-10">
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

      {/* Toggle Button */}
      <button
        onClick={filterToggleHandler}
        type="button"
        className="w-10 h-10 fixed top-5 right-5 z-50 rounded lg:hidden flex justify-center items-center border border-red-500 text-red-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductsFilter;
