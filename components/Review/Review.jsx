import Image from "next/image";
import shadi from "@/assets/image/Rectangle 29.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Review() {
  return (
    <div className=" bg-white  dark:bg-dark py-24">
      <div className=" text-center container mx-auto px-5">
        <h2 className="text-lg text-primary md:text-xl">রিভিউ</h2>
        <h1 className="text-2xl md:text-5xl dark:text-white mt-5 text-seocundary font-extrabold">
          বিবাহিত দম্পতিদের কথা
        </h1>
        <div className="flex gap-x-5 justify-center items-center mt-5 mb-10">
          <div className="w-7 h-2 rounded-full bg-primary"></div>
          <div className="w-20 h-2 rounded-full bg-primary"></div>
        </div>
        <div className="md:flex flex-row  gap-10 items-center justify-center">
          {/* Image site */}
          <div className="relative">
            <div className="border-primary border-t-[16px] w-1/2 absolute top-0 right-0"></div>

            <Image
              className="object-cover w-auto py-10 pr-6 border-primary border-r-[16px] relative"
              src={shadi}
              alt=""
            />

            <div className="border-primary border-b-[16px] w-1/2 absolute bottom-0 right-0"></div>
          </div>
          {/* Content siite */}
          <div className="w-full md:w-1/2 space-y-10 md:space-y-20 mt-10">
            <p className="font-normal text-lg md:text-2xl text-justify dark:text-white text-seocundary">
              আমাদের ফেসবুক পেইজের মাধ্যমে গ্রাহক আমাদের সাথে সরাসরি যোগাযোগ
              করতে পারবেন। যেকোনো ধরণের সমস্যা অথবা যেকোনো ধরনের প্রশ্নের উত্তর
              আমরা দিয়ে থাকি।{" "}
            </p>
            <div className="flex justify-between items-start gap-x-10">
              <div className="flex items-center gap-x-5">
                <MdOutlineKeyboardArrowLeft className="border-[1px] text-2xl" />
                <MdOutlineKeyboardArrowRight className="border-[1px] text-2xl" />
              </div>
              <div className="flex justify-between items-start md:gap-x-10 gap-x-5">
                <div className="w-12 md:w-24 h-[2px] dark:bg-white bg-seocundary mt-2"></div>
                <p className="text-lg md:text-2xl font-bold dark:text-white text-seocundary text-start">
                  মিস্টার এন্ড মিসেস্ <br className="hidden md:block" /> সরকার
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
