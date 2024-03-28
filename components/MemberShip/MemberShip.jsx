import React from "react";
import CardCarousel from "./CardCarousel";
import SelectedData from "./SelectedData";

export default function MemberShip() {
  return (
    <div className=" relative bg-primary dark:bg-dark py-24 md:py-36">
      <div className=" text-white text-center container mx-auto px-5 mt-10">
        <h2 className="text-lg md:text-xl">কার্যপদ্ধতি</h2>
        <h1 className="text-2xl md:text-5xl mt-5">মেম্বারশিপ প্লান</h1>
        <div className="flex gap-x-5 justify-center items-center mt-5">
          <div className="w-7 h-2 rounded-full bg-white"></div>
          <div className="w-20 h-2 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="-mb-20">
        <CardCarousel />
      </div>
      <div className="bg-white w-full p-2 px-5 md:p-8 rounded-md absolute -top-[15%] md:-top-[7%] left-1/2 transform -translate-x-1/2">
        <SelectedData />
      </div>
    </div>
  );
}
