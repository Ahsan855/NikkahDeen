"use client";

import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import bright from "@/assets/image/pattiri.png";
import groom from "@/assets/image/pattoro.png";

const BiodataBoth = ({ biodataBoth }) => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      // Update settings based on window width
      const screenWidth = window.innerWidth;
      let newSlidesToShow = 4; // Default for large screens

      if (screenWidth < 640) {
        newSlidesToShow = 1; // For small screens (phones)
      } else if (screenWidth < 1024) {
        newSlidesToShow = 2; // For tablets
      }

      if (newSlidesToShow !== slidesToShow) {
        setSlidesToShow(newSlidesToShow);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial state
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slidesToShow]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container container mx-auto md:my-28 my-16 px-5 ">
      <h1 className="text-2xl md:text-5xl font-extrabold text-seocundary dark:text-white text-center">
        পাত্র-পাত্রীর বায়োডাটা
      </h1>
      <div className="flex gap-x-5 justify-center items-center mt-5 mb-20">
        <div className="w-7 h-2 rounded-full bg-primary"></div>
        <div className="w-20 h-2 rounded-full bg-primary"></div>
      </div>
      <Slider ref={sliderRef} {...settings} key={slidesToShow}>
        {biodataBoth.map((data) => (
          <div key={data.id} className="px-3">
            <div className="max-w-sm p-5 rounded shadow-lg bg-white dark:bg-dark">
              <Image src={data.img} alt="" width={300} height={200} />
              <div className="text-center space-y-5 mt-5">
                <div className="font-bold text-black dark:text-white text-xl mb-2">
                  {data.name}
                </div>
                <p className="text-gray-700 dark:text-white text-lg">
                  {data.description}
                </p>
                <button className="border border-seocundary hover:border-primary hover:bg-primary hover:text-white text-seocundary dark:text-white font-semibold rounded-md px-5 py-2">
                  বায়োডাটা দেখুন
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center mt-10">
        <button className="border border-seocundary hover:border-primary hover:bg-primary hover:text-white text-seocundary dark:text-white font-semibold rounded-md px-5 py-2">
          আরও দেখুন
        </button>
      </div>
    </div>
  );
};

export default BiodataBoth;

export const biodataBoth = [
  {
    id: 1,
    img: bright,
    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 2,
    img: groom,
    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 3,
    img: bright,
    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 4,
    img: groom,
    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 5,
    img: bright,
    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 6,
    img: groom,
    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 7,
    img: bright,
    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 8,
    img: groom,
    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
];
