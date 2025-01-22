"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import SearchMobile from "./SearchMobile";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { SearchContext } from "../context/SearchContext";

function Header() {
  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);

  const [nav, setNav] = useState(false);
  const mobileMode = useMediaQuery({ query: "(max-width: 768px)" });
  const desktopMode = useMediaQuery({ query: "max-width: 1300px" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      // search

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursot-pointer"
          >
            <Image src="/logo2.png" alt="logo" width={64} height={44} />
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

          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Automobile
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

export default Header;
