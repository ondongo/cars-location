"use client";
import React, { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "@/context/SearchContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Location de voiture avec{" "}
              <span className="text-accent">Ko.Zua</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description-text"
            >
              Zua Nzela na yo, votre voyage commence ici. Découvrez notre flotte
              de véhicules de qualité pour tous vos déplacements.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              <button className="btn btn-sm btn-accent max-w-[50%] xl:mr-4 mt-4  bg-[#111828] hover:bg-[#111828]/10">
                Je réserve
              </button>

              <button className="btn btn-sm btn-accent max-w-[50%] xl:mr-4 mt-4">
                Voir les voitures
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-w-[50vh] md:max-w-[70vw] xl:max-w-[600px] xl:max-h-[430px] xl:absolute xl:right-[100px] min-[1680px]
          :right-[120px] xl:top-48"
          >
            <Image
              src={"/images/hero/car.svg"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />{" "}
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: "easeInOut" }}
          className="fixed top-[80px] z-10 w-full max-w-[1920px]"
        >
          {" "}
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            /* variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }} */
            className="-mt-12 w-full max-w-[1300px] mx-auto"
          >
            {" "}
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Hero;
