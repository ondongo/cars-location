"use client";
import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { FaBuilding, FaMapMarkedAlt } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import SpinnerLoader from "./SpinnerLoader";

const locationList = [
  "Le Caire, Egypte",
  "Lagos, Nigeria",
  "Kinshasa, RD Congo",
  "Johannesburg, Afrique du Sud",
  "Casablanca, Maroc",
  "Nairobi, Kenya",
  "Dakar, Sénégal",
  "Abidjan, Côte d'Ivoire",
  "Addis-Abeba, Ethiopie",
  "Tunis, Tunisie",
];
interface NominatimResponse {
  display_name: string;
  type: string;
}

function LocationSelection() {
  const [location, setLocation] = useState("Choix de localisation");
  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<NominatimResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recentlySearched, setRecentlySearched] = useState<string[]>([]);

  useEffect(() => {
    if (value.length >= 1) {
      setIsLoading(true);
      const fetchSuggestions = async () => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${value}, Congo&viewbox=11.8315,-4.1778,15.3115,-4.8889&bounded=1`
          );
          const data: NominatimResponse[] = await response.json();
          setSuggestions(data);
        } catch (error) {
          console.error(error);
          setSuggestions([]);
        } finally {
          setIsLoading(false);
        }
      };

      const timeoutId = setTimeout(() => {
        fetchSuggestions();
      }, 500);

      return () => clearTimeout(timeoutId);
    } else {
      setSuggestions([]);
      setIsLoading(false);
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
    setSuggestions([]);
    setIsLoading(false);
  };

  const handleSuggestionClick = (suggestion: NominatimResponse) => {
    setValue(suggestion.display_name);
    setSuggestions([]);
    setIsLoading(false);
    // Ajouter la recherche récente
    if (!recentlySearched.includes(suggestion.display_name)) {
      const updatedRecentlySearched = [
        suggestion.display_name,
        ...recentlySearched,
      ];
      if (updatedRecentlySearched.length > 5) {
        updatedRecentlySearched.pop(); // Supprimer le plus ancien s'il y en a plus de 5
      }
      setRecentlySearched(updatedRecentlySearched);

      // Stocker dans le localStorage
      localStorage.setItem(
        "recentlySearched",
        JSON.stringify(updatedRecentlySearched)
      );
    }
  };

  useEffect(() => {
    // Récupérer les recherches récentes depuis le localStorage
    const storedRecentlySearched = localStorage.getItem("recentlySearched");
    if (storedRecentlySearched) {
      setRecentlySearched(JSON.parse(storedRecentlySearched));
    }
  }, []);

  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  // Gérer l'affichage des récents lorsque le champ est en focus
  const recentSearchesDisplay =
    isInputFocused && recentlySearched.length > 0 && value === "";

  const handleRecentSearchClick = (recentSearch: string) => {
    setValue(recentSearch);
    setSuggestions([]);
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      <div className="flex justify-center items-center w-full h-full gap-2.5 py-1 ">
        <input
          type="text"
          className="w-full h-[40px] ml-6 pl-3 rounded-lg placeholder-black placeholder-opacity-50 font-medium focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
          placeholder="Rechercher un lieu de location ..."
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {value && (
          <div className="absolute inset-y-0 right-1 flex items-center">
            <button
              onClick={handleClear}
              className="text-white bg-accent rounded-full p-1"
              aria-label="Clear input"
            >
              <AiOutlineClose />
            </button>
          </div>
        )}
      </div>
      <div className="absolute w-full bg-white mt-4 rounded-lg shadow-lg z-10 max-h-[300px] min-w-[380px] overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center p-4 min-h-[200px]">
            <SpinnerLoader />
          </div>
        ) : recentSearchesDisplay ? (
          <>
            <div className="bg-gray-200 p-5 flex justify-center">
              <p className="font-bold text-md text-black">Endroits récemment recherchés</p>
            </div>
            <ul>
              {recentlySearched.map((recentSearch, index) => (
                <li
                  key={index}
                  className="mx-2 my-2 p-4 cursor-pointer bg-transparent border border-transparent rounded-lg hover:bg-gray-100 flex items-center gap-2.5"
                  onClick={() => handleRecentSearchClick(recentSearch)}
                >
                  <IoLocationOutline className="text-[#539CD0] text-xl" />
                  {recentSearch}
                </li>
              ))}
            </ul>
          </>
        ) : suggestions.length > 0 ? (
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="mx-2 my-2 p-4 cursor-pointer bg-transparent border border-transparent rounded-lg hover:bg-gray-100 flex items-center gap-2.5"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.type === "hotel" ||
                suggestion.type === "love_hotel" ? (
                  <FaBuilding className="text-[#FC9D15] text-lg" />
                ) : (
                  <IoLocationOutline className="text-[#539CD0] text-xl" />
                )}
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        ) : (
          /* value.length > 2 && (
            <div className="flex items-center justify-center p-4">
              <p>Aucun résultat trouvé.</p>
            </div>
          ) */
         null
        )}
      </div>
    </div>
  );
}

export default LocationSelection;
