"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function CardCarousel() {
  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
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
    <div className="slider-container container mx-auto pt-20">
      <Slider {...settings}>
        {/* Card 1 */}
        <div className="mt-20">
          <div className="max-w-xs bg-white dark:bg-dark dark:text-white text-seocundary hover:shadow-lg shadow-md overflow-hidden m-auto">
            <div className=" py-6">
              <div className="mt-6 flex  justify-between items-center">
                <div className="px-5">
                  <p className=" text-2xl text-primary font-semibold">মাসিক</p>

                  <p className="text-2xl font-bold dark:text-white text-black  mb-2">
                    ৳৬৯৯
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 pb-16">
              <ul className="text-seocundary dark:text-white space-y-5">
                <li className="flex  gap-x-3">
                  <FaCheck /> ফ্রি বায়োডাটা তৈরি করতে পারবেন
                </li>
                <li className="flex  gap-x-3">
                  <FaCheck /> অসংখ্য বায়োডাটা পাঠাতে পারবেন
                </li>
                <li className="flex  gap-x-3">
                  <FaCheck /> অসংখ্য প্রোফাইল দেখতে পারবেন
                </li>
                <li className="flex  gap-x-3">
                  <FaCheck /> অসংখ্য প্রস্তাব পাঠাতে পারবেন
                </li>
                <li className="flex  gap-x-3 text-[#868E96]">
                  <RxCross1 /> সরাসরি ৫টি প্রস্তাব গ্রহণ করতে পারবেন
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button className="border hover:border dark:border-primary dark:hover:border-white bg-primary dark:text-white hover:border-primary hover:bg-white dark:hover:text-primary hover:text-primary text-white  font-semibold  px-10 py-2">
                  এপ্লাই করুন
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div>
          <div className="max-w-xs bg-seocundary hover:shadow-lg shadow-md overflow-hidden m-auto">
            <div className=" py-6">
              <div className="text-center">
                <h2 className="text-2xl font-medium text-gray-800 bg-white py-3 mb-2">
                  পপুলার প্লান -{" "}
                  <sapn className="text-primary text-4xl font-extrabold">
                    ২০%{" "}
                  </sapn>{" "}
                  ছাড়
                </h2>
              </div>
              <div className="mt-6 flex bg-seocundary text-white justify-between items-center">
                <div className="px-5">
                  <p className=" text-2xl font-semibold">ত্রৈমাসিক</p>
                  <div className="flex items-center justify-start gap-x-2 text-center">
                    <p className="text-2xl font-semibold mb-2 line-through">
                      ৳২,২৫০
                    </p>
                    <p className="text-2xl font-bold  mb-2">৳১,৪৯৯</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 pb-16">
              <ul className="text-white space-y-5">
                <li className="flex  gap-x-3">
                  <FaCheck /> ফ্রি বায়োডাটা তৈরি করতে পারবেন
                </li>
                <li className="flex  gap-x-3">
                  <FaCheck /> অসংখ্য বায়োডাটা পাঠাতে পারবেন
                </li>
                <li className="flex  gap-x-3">
                  <FaCheck /> অসংখ্য প্রোফাইল দেখতে পারবেন
                </li>
                <li className="flex  gap-x-3">
                  <FaCheck /> সরাসরি ১৫টি প্রস্তাব পাঠাতে পারবেন
                </li>
                <li className="flex  gap-x-3">
                  <FaCheck /> সরাসরি ১৫টি প্রস্তাব গ্রহণ করতে পারবেন
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button className="border bg-white hover:border-primary hover:bg-primary dark:hover:text-white hover:text-white text-seocundary dark:text-primary font-semibold  px-10 py-2">
                  এপ্লাই করুন
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="mt-20">
          <div className="max-w-xs bg-white dark:bg-dark dark:text-white text-seocundary hover:shadow-lg shadow-md overflow-hidden m-auto">
            <div className=" py-6">
              <div className="mt-6 flex  justify-between items-center">
                <div className="px-5">
                  <p className=" text-2xl text-primary font-semibold">
                    ষান্মাসিক
                  </p>

                  <p className="text-2xl font-bold dark:text-white text-black  mb-2">
                    ৳৪,২০০
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 pb-16">
              <ul className="text-seocundary dark:text-white space-y-5">
                <li className="flex  gap-x-3">
                  <FaCheck /> ফ্রি বায়োডাটা তৈরি করতে পারবেন
                </li>
                <li className="flex  gap-x-3">
                  <FaCheck /> অসংখ্য বায়োডাটা পাঠাতে পারবেন
                </li>
                <li className="flex  gap-x-3">
                  <FaCheck /> অসংখ্য প্রোফাইল দেখতে পারবেন
                </li>
                <li className="flex  gap-x-3">
                  <FaCheck /> অসংখ্য প্রস্তাব পাঠাতে পারবেন
                </li>
                <li className="flex  gap-x-3">
                  <FaCheck /> অসংখ্য প্রস্তাব গ্রহণ করতে পারবেন
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button className="border hover:border dark:border-primary dark:hover:border-white bg-primary dark:text-white hover:border-primary hover:bg-white dark:hover:text-primary hover:text-primary text-white  font-semibold  px-10 py-2">
                  এপ্লাই করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
