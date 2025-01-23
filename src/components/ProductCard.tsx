import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Vehicle } from "@/types/vehicle";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  datas: Vehicle;
}

const ProductCard: React.FC<ProductCardProps> = ({ datas }) => {
  const router = useRouter();
  function handleDetail() {
    router.push("/vehicles/1");
  }
  return (
    <div className="max-w-[385px] mx-auto sm:mx-0 bg-[#FAFAFA] shadow-sm rounded-lg overflow-hidden">
      <Image
        src={datas.images[0]}
        alt={datas.type}
        width={380}
        height={284}
        className="rounded-t-lg"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-sm text-gray-500">{datas.subcategory}</div>
            <h3 className="text-lg font-bold uppercase text-gray-800">
              {datas.type}
            </h3>
            <h3 className="text-accent font-semibold uppercase">
              {datas.pricePerDay.toLocaleString()} FCFA / Jour
            </h3>
          </div>

          <div className="flex gap-x-1 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div className="flex gap-x-4 mb-4">
          {[
            { text: datas.features.fuel, icon: "icons/carSlider/gas.svg" },
            {
              text: `${datas.features.seats} places`,
              icon: "icons/carSlider/engine.svg",
            },
            { text: datas.features.transmission, icon: "icons/carSlider/gearshift.svg" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2 shadow-md">
                <Image src={item.icon} width={24} height={24} alt={item.text} />
              </div>
              <div className="text-xs text-gray-600 uppercase">{item.text}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-accent btn-lg w-full py-3 rounded-lg" onClick={handleDetail}>
          Voir plus
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
