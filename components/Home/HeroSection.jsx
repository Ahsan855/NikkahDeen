import React from "react";
import bannar from "@/assets/image/Image.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex w-full my-16 items-center justify-center px-5">
      <div className="flex mx-auto container gap-y-10 lg:flex-row flex-col items-center justify-between">
        <div className="w-full md:w-1/2 md:px-5 md:space-y-6 sm:space-y-4 space-y-5">
          <h2 className="header text-primary  font-bold">
            ইসলামিক ম্যাট্রিমনি
          </h2>
          <h1 className="text-4xl leading-[50px] md:text-[56px] dark:text-white text-[#404040] md:leading-[76px] font-bold ">
            মুসলিম <span className="text-primary">পাত্র-পাত্রী</span>
            <span className="text-primary"> খুঁজুন </span>এখন খুবই সহজে
          </h1>
          <p className="lg:text-xl text-sm text-[#737373] dark:text-white font-medium">
            হাদীস থেকে বর্ণিত, যিনি বিয়ে করলেন, তিনি তার অর্ধেক দ্বীন পূর্ণ
            করলেন এবং বাকী অর্ধেকের জন্য তিনি যেন আল্লাহকে ভয় করেন। আপনার অর্ধেক
            দ্বীন পূর্ণ করতে মুসলিম পাত্র-পাত্রী খুঁজুন এখন খুবই সহজে।
          </p>
          <div className="flex space-x-4">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-primary text-white">
              পাত্র-পাত্রী খুঁজুন
            </button>
            <button className="px-4 py-2 underline text-primary hover:text-primary/90">
              রেজিস্ট্রেশন করুন
            </button>
          </div>
        </div>
        <div>
          <Image src={bannar} alt="hero navigate ui" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
