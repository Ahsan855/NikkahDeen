"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SelectedData() {
  return (
    <div>
      <div className="flex py-2 items-center justify-center flex-wrap md:flex-nowrap gap-5  bg-[#F3D9FA]">
        <div className="flex justify-center items-center flex-col">
          <label htmlFor="patro" className="text-gray-700">
            আমি খুঁজছি
          </label>
          <DropdownSelection id="patro" options={["পাত্র", "পাত্রী"]} />
        </div>
        <div className="flex  justify-center items-center flex-col">
          <label htmlFor="maritalStatus" className="text-gray-700">
            বৈবাহিক অবস্থা
          </label>
          <DropdownSelection
            id="maritalStatus"
            options={["অবিবাহিত", "বিবাহিত"]}
          />
        </div>
        <div className="flex  justify-center items-center flex-col">
          <label htmlFor="ageRange" className="text-gray-700">
            বয়স
          </label>
          <DropdownSelection
            id="ageRange"
            options={["১৮ - ২১", "১২ - ১৮", "২৫ - ২৮"]}
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <label htmlFor="district" className="text-gray-700">
            জেলা
          </label>
          <DropdownSelection id="district" options={["ঢাকা", "ঢাকা", "ঢাকা"]} />
        </div>

        <div className=" bg-seocundary rounded-l-md cursor-pointer hover:bg-primary">
          <div className="p-2 text-white">
            <FaSearch className="text-2xl " />
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownSelection({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("নির্বাচন");

  return (
    <div className="w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer mx-auto flex items-center justify-between border-r-[2px]   px-6 py-2"
      >
        <h1 className="font-medium text-gray-600">{selectedValue}</h1>
        <svg
          className={`${isOpen ? "-rotate-180" : "rotate-0"} duration-300`}
          width={25}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#4B5563"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Dropdown options */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 mt-1 rounded-md bg-white shadow-lg`}
      >
        <div className="py-1">
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedValue(option);
                setIsOpen(false);
              }}
              className="cursor-pointer px-4 py-2  border-b-[1px] text-gray-800 hover:bg-gray-200"
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
