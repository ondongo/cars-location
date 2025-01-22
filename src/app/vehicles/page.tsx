"use client";
import DataIteration from "@/components/DataIteration";
import ProductsFilter from "@/components/ProductsFilter";
import React, { useState } from "react";
import productDatas from "../../data/products.json";
import ProductCard from "@/components/ProductCard";
import { fakeVehicles } from "@/data/fakeVehicles";

function page() {
  const [filters, setFilters] = useState({
    apartments: false,
    vehicles: false,
    furnitures: false,
    electronics: false,
  });

  const [priceRange, setPriceRange] = useState({ min: 100, max: 500 });
  const [location, setLocation] = useState("");
  const [filterToggle, setFilterToggle] = useState(false);

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };

  const priceRangeHandler = (value: { min: number; max: number }) => {
    setPriceRange(value);
  };

  const locationHandler = (loc: string) => {
    setLocation(loc);
  };

  const filterToggleHandler = () => {
    setFilterToggle(!filterToggle);
  };

  const { products } = productDatas;

  return (
    <div className="p-10">
      <div className="w-full lg:flex lg:space-x-[30px]">
        <div className="lg:w-[270px]">
          <ProductsFilter
            filters={filters}
            checkboxHandler={checkboxHandler}
            priceRange={priceRange}
            priceRangeHandler={priceRangeHandler}
            location={location}
            locationHandler={locationHandler}
            className="custom-class"
            filterToggle={filterToggle}
            filterToggleHandler={filterToggleHandler}
          />
        </div>

        <div className="flex-1">
          <div className="w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px] rounded-lg">
            <div>
              <p className="font-400 text-[13px]">
                <span className="text-qgray"> Showing</span> 1–16 of 66 results
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <span className="font-400 text-[13px]">Sort by:</span>
              <div className="flex space-x-3 items-center border-b border-b-qgray">
                <span className="font-400 text-[13px] text-qgray">Default</span>
                <span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L5 5L9 1" stroke="#9A9A9A" />
                  </svg>
                </span>
              </div>
            </div>
        
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  xl:gap-[30px] gap-5 mb-[40px]">
            <DataIteration datas={fakeVehicles} startLength={0} endLength={3}>
              {({ datas }: any) => (
                <div data-aos="fade-up" key={datas.id} className="mb-8">
                  <ProductCard datas={datas} />
                </div>
              )}
            </DataIteration>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
