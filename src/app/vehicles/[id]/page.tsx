"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variant";
function VehicleDetailsPage({ params }: { params: { id: string } }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );
  const vehicle = {
    name: "BMW",
    pricePerDay: 25000,
    image: "/images/carGray.png", // Remplacez par une vraie image
    gallery: [
      "/images/about/car01.png",
      "/images/about/car01.png",
      "/images/about/car01.png",
    ],
    technicalSpecifications: [
      { label: "Gear Box", value: "Automatic" },
      { label: "Fuel", value: "Petrol" },
      { label: "Doors", value: "2" },
      { label: "Air Conditioner", value: "Yes" },
      { label: "Seats", value: "5" },
      { label: "Distance", value: "500 km" },
    ],
    equipment: ["ABS", "Air Bags", "Cruise Control", "Air Conditioner"],
  };

  const otherCars = [
    {
      name: "Mercedes",
      pricePerDay: 25000,
      image: "/images/carGray.png",
      type: "Sedan",
      features: ["Automatic", "PB 95", "Air Conditioner"],
    },
    {
      name: "Mercedes",
      pricePerDay: 50000,
      image: "/images/carGray.png",
      type: "Sport",
      features: ["Automatic", "PB 95", "Air Conditioner"],
    },
    {
      name: "Mercedes",
      pricePerDay: 45000,
      image: "/images/carGray.png",
      type: "Sedan",
      features: ["Automatic", "PB 95", "Air Conditioner"],
    },
    {
      name: "Mercedes",
      pricePerDay: 55000,
      image: "/images/carGray.png",
      type: "Sedan",
      features: ["Automatic", "PB 95", "Air Conditioner"],
    },
  ];

  return (
    <main className="max-w-[1920px] bg-white mx-auto overflow-hidden">
      <div className="container mx-auto py-10 px-4">
        {/* Détails principaux */}

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-10">
            <div>
              {/* Swiper pour la galerie */}
              <Swiper
                //navigation
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={(swiperInstance) =>
                  (swiperRef.current = swiperInstance)
                }
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="rounded-lg"
              >
                {vehicle.gallery.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      width={600}
                      height={300}
                      className="rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex gap-2 mt-4 ">
                {vehicle.gallery.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveIndex(index); // Change l'état actif
                      swiperRef.current?.slideTo(index);
                    }}
                    className={`relative flex justify-center items-center h-[80px] w-[100px] rounded-lg cursor-pointer overflow-hidden ${
                      activeIndex === index
                        ? "border-2 border-accent"
                        : "border border-[#FAFAFA]"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Gallery thumbnail ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Spécifications techniques */}
            <div>
              <div className="mb-10">
                <h1 className="text-3xl font-bold">{vehicle.name}</h1>

                <div className="flex flex-row justify-between w-[100%">
                  <p className="text-md text-secondary">Categorie : voiture</p>
                  <p className="text-md text-green-500">Disponible</p>
                </div>

                <p className="text-3xl text-accent font-bold mt-4">
                  {vehicle.pricePerDay} FCFA / jour
                </p>
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                Technical Specification
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {vehicle.technicalSpecifications.map((spec, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#FAFAFA] rounded-lg text-start w-[196px] h-[148px] "
                  >
                    <p className="text-lg font-bold text-black ">
                      {spec.label}
                    </p>
                    <p className="text-sm text-gray-500">{spec.value}</p>
                  </div>
                ))}
              </div>

              <motion.div
                /* variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }} */
                className="flex flex-col xl:flex-row gap-x-3 justify-center xl:justify-start "
              >
                <button className="btn btn-sm btn-accent xl:max-w-[50%] xl:mr-4 mt-4  bg-[#111828] hover:bg-[#111828]/10">
                  Réserver pour une location
                </button>

                <button className="btn btn-sm btn-accent xl:max-w-[50%] xl:mr-4 mt-4">
                  Achat éclair
                </button>
              </motion.div>

              {/* Équipement */}
              <div className="mt-6 mb-10">
                <h2 className="text-2xl font-semibold mb-4">Car Equipment</h2>
                <div className="grid grid-cols-2 gap-4">
                  {vehicle.equipment.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-accent"
                    >
                      <FaCheckCircle />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Onglets Tabs */}
          <div className="min-w-[100%] mx-auto bg-white rounded-md p-6 border border-gray mb-20">
            <div className="flex border-b border-gray-300 mb-6">
              <button
                onClick={() => setActiveTab("description")}
                className={`flex-1 text-center py-3 text-lg font-semibold ${
                  activeTab === "description"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`flex-1 text-center py-3 text-lg font-semibold ${
                  activeTab === "reviews"
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500"
                }`}
              >
                Avis (0)
              </button>
            </div>

            {/* Contenu de l'onglet actif */}
            {activeTab === "description" && (
              <div className="text-gray-700 space-y-4">
                <p>
                  Cette <strong>BMW</strong> est une voiture élégante et
                  performante, idéale pour vos déplacements urbains ou vos
                  escapades. Avec son design moderne et ses fonctionnalités
                  avancées, elle offre un confort inégalé et une expérience de
                  conduite exceptionnelle.
                </p>
                <p>
                  Profitez de son intérieur spacieux, de ses sièges confortables
                  et de sa technologie embarquée, qui inclut la climatisation
                  automatique, un système audio haut de gamme et un écran de
                  navigation intuitif.
                </p>
                <p>
                  Que ce soit pour un usage professionnel ou personnel, cette
                  voiture saura répondre à toutes vos attentes en termes de
                  performance, d'efficacité et de style.
                </p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="text-center text-gray-500 py-6">
                <p>
                  Aucun avis pour le moment. Soyez le premier à laisser un avis
                  !
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Autres voitures */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">Autres véhicules</h2>
            <button className="text-accent font-semibold hover:underline">
              Voir Tous →
            </button>
          </div>

          {/* Other Cars  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherCars.map((car, index) => (
              <div
                key={index}
                className="p-4 bg-[#FAFAFA] rounded-lg shadow-sm text-center max-w-[360px] "
              >
                <Image
                  src={car.image}
                  alt={car.name}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-gray-500 text-sm">{car.type}</p>
                <p className="text-accent font-bold">
                  {car.pricePerDay} FCFA / Jour
                </p>
                <div className="flex justify-center space-x-2 mt-2">
                  {car.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-purple-100 text-accent px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="btn btn-sm btn-accent xl:max-w-full mt-4">
                  Voir les details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default VehicleDetailsPage;
