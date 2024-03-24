"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import translate from "@/assets/image/navbar/Translate.svg";

const Translate = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("বাংলা"); // Default to Bangla

  const translations = [
    { language: "বাংলা", code: "bn" },
    { language: "English", code: "en" },
    { language: "Hindi", code: "hi" },
    { language: "Arabic", code: "ar" },
    // Add more translations as needed
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close dropdown after selection
    // You can perform additional actions here, such as setting the selected language in state or triggering translation logic
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-x-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <Image src={translate} alt="" />
        <div className="flex items-start gap-x-1 justify-center">
          <p>{selectedLanguage}</p>
          <IoIosArrowDown className="text-secondary" />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 bg-white text-primary shadow-md rounded-md">
          {/* Dropdown content */}
          <ul>
            {translations.map((translation, index) => (
              <li
                key={index}
                className="py-2 px-4 cursor-pointer hover:text-primary transition duration-300 ease-in-out"
                onClick={() => handleLanguageSelect(translation.language)}
              >
                {translation.language}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Translate;
