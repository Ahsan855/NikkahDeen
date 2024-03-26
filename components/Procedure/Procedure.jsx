import svg1 from "@/assets/image/Procedure/Vector (1).svg";
import svg2 from "@/assets/image/Procedure/Vector (2).svg";
import svg3 from "@/assets/image/Procedure/Vector (3).svg";
import svg4 from "@/assets/image/Procedure/Vector (4).svg";
import svg5 from "@/assets/image/Procedure/Vector (5).svg";
import svg6 from "@/assets/image/Procedure/Vector (6).svg";
import svg7 from "@/assets/image/Procedure/Vector (7).svg";
import Image from "next/image";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function Procedure() {
  return (
    <div className=" bg-primary dark:bg-dark py-24 md:py-36">
      <div className=" text-white text-center container mx-auto px-5">
        <h2 className="text-lg md:text-xl">কার্যপদ্ধতি</h2>
        <h1 className="text-2xl md:text-5xl">আমরা যেভাবে কাজ করি</h1>
        <div className="flex gap-x-5 justify-center items-center mt-5">
          <div className="w-7 h-2 rounded-full bg-white"></div>
          <div className="w-20 h-2 rounded-full bg-white"></div>
        </div>
        <div className="mt-20 space-y-10">
          {/* 1st col */}
          <div className="md:flex flex-row items-center gap-x-5 space-y-10 md:space-y-0">
            <div className="flex flex-col items-center gap-y-5 shadow-md p-4 cursor-pointer rounded-md hover:shadow-xl duration-300">
              <Image
                src={svg1}
                className="bg-white h-16 w-16 p-2 rounded-md mx-auto"
                alt=""
              />
              <h1 className="text-2xl font-bold">রেজিস্ট্রেশন করুন</h1>
              <p>খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।</p>
            </div>
            <div className="flex flex-col items-center gap-y-5 shadow-md p-4 cursor-pointer rounded-md hover:shadow-xl duration-300">
              <Image
                src={svg2}
                className="bg-white h-16 w-16 p-2 rounded-md mx-auto"
                alt=""
              />
              <h1 className="text-2xl font-bold">বায়োডাটা তৈরি করুন</h1>
              <p>খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।</p>
            </div>
            <div className="flex flex-col items-center gap-y-5 shadow-md p-4 cursor-pointer rounded-md hover:shadow-xl duration-300">
              <Image
                src={svg3}
                className="bg-white h-16 w-16 p-2 rounded-md mx-auto"
                alt=""
              />
              <h1 className="text-2xl font-bold">পাত্র-পাত্রী খুঁজুন</h1>
              <p>খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।</p>
            </div>
            <div className="flex flex-col items-center gap-y-5 shadow-md p-4 cursor-pointer rounded-md hover:shadow-xl duration-300">
              <Image
                src={svg4}
                className="bg-white h-16 w-16 p-2 rounded-md mx-auto"
                alt=""
              />
              <h1 className="text-2xl font-bold">বিয়ের প্রস্তাব পাঠান</h1>
              <p>খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।</p>
            </div>
          </div>
          {/* 2nd col */}
          <div className="md:flex flex-row items-center gap-x-5 mt-10 space-y-10 md:space-y-0">
            <div className="flex flex-col items-center gap-y-5 shadow-md p-4 cursor-pointer rounded-md hover:shadow-xl duration-300">
              <Image
                src={svg7}
                className="bg-white h-16 w-16 p-2 rounded-md mx-auto"
                alt=""
              />
              <h1 className="text-2xl font-bold">তাদের মতামত জানুন</h1>
              <p>খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।</p>
            </div>
            <div className="flex flex-col items-center gap-y-5 shadow-md p-4 cursor-pointer rounded-md hover:shadow-xl duration-300">
              <Image
                src={svg6}
                className="bg-white h-16 w-16 p-2 rounded-md mx-auto"
                alt=""
              />
              <h1 className="text-2xl font-bold">বিয়ের আংটি পরান</h1>
              <p>খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।</p>
            </div>
            <div className="flex flex-col items-center gap-y-5 shadow-md p-4 cursor-pointer rounded-md hover:shadow-xl duration-300">
              <Image
                src={svg5}
                className="bg-white h-16 w-16 p-2 rounded-md mx-auto"
                alt=""
              />
              <h1 className="text-2xl font-bold">বিবাহ সম্পন্ন করুন</h1>
              <p>খুব সহজেই বিনামূল্যে দ্বীনি বিয়ে বায়োডাটা তৈরি করতে পারবেন।</p>
            </div>
            <div className="p-8 my-auto  mt-10 md:mt-0">
              <div className="text-xl box-border flex items-center   p-4 border  rounded-md  text-white relative group">
                <span className="text-xl font-normal w-52 pr-2">
                  রেজিস্ট্রেশন করুন
                </span>
                <span className=" rounded-r hover:bg-white border-l-2  text-white hover:rounded-md hover:text-primary absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
                  <FaArrowRightFromBracket className="h-4 w-4 inline mx-auto" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
