"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import SearchMobile from "./SearchMobile";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaCar, FaTruck, FaShoppingCart } from "react-icons/fa";

function NavBarStatic() {
  const [nav, setNav] = useState(false);
  const mobileMode = useMediaQuery({ query: "(max-width: 768px)" });
  const desktopMode = useMediaQuery({ query: "max-width: 1300px" });

  return (
    <header
      className={
        "bg-white shadow-md py-2 fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300"
      }
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursot-pointer"
          >
            <Image
              src="/Black_And_Red_Modern_Car_Logo__3_-removebg-preview.png"
              alt="logo"
              width={64}
              height={44}
            />
          </Link>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>

        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row
           xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center 
           xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Accueil
          </Link>
 
<Popover>
  {({ open }) => (
    <>
      <Popover.Button
        className={`
          ${open ? "text-accent" : "text-black"}
        cursor-pointer border-none`}
      >
        <span>Automobile</span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xl -translate-x-1/2 transform px-4 sm:px-0">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 bg-white">
            <div className="flex p-7 gap-8">
              {/* Vente et achat */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vente et achat
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="flex flex-col gap-1 rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                  >
                    <span className="text-sm font-medium text-gray-900">Neuf</span>
                    <span className="text-xs text-gray-500">
                      Découvrez nos véhicules neufs au meilleur prix.
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col gap-1 rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                  >
                    <span className="text-sm font-medium text-gray-900">Occasion</span>
                    <span className="text-xs text-gray-500">
                      Trouvez des véhicules d'occasion fiables et abordables.
                    </span>
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Location
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      type: "Citadine",
                      icon: <FaCar className="text-green-500 text-xl" />,
                      description: "Idéal pour les trajets en ville.",
                    },
                    {
                      type: "Berline",
                      icon: <FaCar className="text-green-500 text-xl" />,
                      description: "Profitez du confort pour vos longs trajets.",
                    },
                    {
                      type: "SUV",
                      icon: <FaCar className="text-green-500 text-xl" />,
                      description: "Polyvalent pour la ville et l'aventure.",
                    },
                    {
                      type: "4x4",
                      icon: <FaTruck className="text-red-500 text-xl" />,
                      description: "Parfait pour les terrains difficiles.",
                    },
                    {
                      type: "Camionnette",
                      icon: <FaTruck className="text-red-500 text-xl" />,
                      description: "Solution idéale pour transporter vos marchandises.",
                    },
                  ].map(({ type, icon, description }) => (
                    <a
                      key={type}
                      href="#"
                      className="flex flex-col gap-1 rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-2">
                    
                        <span className="text-sm font-medium text-gray-900">
                          {type}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{description}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  )}
</Popover>

          <Link
            className="cursor-pointer"
            to="abou"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Immobilier
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
          >
            Offre spéciale
          </Link>
          <Link
            className="cursor-pointer"
            to="why"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
          >
            Divers
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
          >
            Contact
          </Link>
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="/"
            smooth={desktopMode}
            activeClass="active"
            spy={true}
          >
            Réserver
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}

export default NavBarStatic;
