"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import bright from "@/assets/image/pattiri.png";
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        padding: "3px",

        color: "white",
        background: "#515251",
      }}
      onClick={onClick}
    />
  );
}
const BiodataPattiri = ({ biodatabright }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
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
        পাত্রীর বায়োডাটা
      </h1>
      <div className="flex gap-x-5 justify-center items-center mt-5 mb-20">
        <div className="w-7 h-2 rounded-full bg-primary"></div>
        <div className="w-20 h-2 rounded-full bg-primary"></div>
      </div>
      <Slider {...settings}>
        {biodatabright.map((data) => (
          <div key={data.id} className="px-3">
            <div className="max-w-sm p-5 rounded shadow-lg bg-white dark:bg-dark">
              <Image src={bright} alt="" width={300} height={200} />
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

export default BiodataPattiri;

export const biodatabright = [
  {
    id: 1,

    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 2,

    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 3,

    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 4,

    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 5,

    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 6,

    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 7,

    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
  {
    id: 8,

    name: "রোবাইয়া খানম",
    description: "খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।",
  },
];
