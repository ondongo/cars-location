import React from "react";
import CarSlider from "./CarSlider";
import Brands from "./Brands";

function Cars() {
  return (
    <section className="section h-screen flex items-center" id="cars">
      <div className="container mx-auto">
        {/*   <Brands /> */}
        <CarSlider />
      </div>
    </section>
  );
}

export default Cars;
