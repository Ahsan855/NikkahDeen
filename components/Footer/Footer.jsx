import Image from "next/image";
import React from "react";
import logo from "@/assets/image/footerlogo.png";
import dash from "@/assets/image/dash.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdHome } from "react-icons/md";

export default function Footer() {
  return (
    <div>
      <footer class="bg-seocundary dark:bg-dark px-5 py-10 dark:text-white  dark:border-t-[1px]">
        <div class="container mx-auto pt-28 pb-8  flex flex-wrap justify-between">
          <div class="w-full sm:w-1/2 md:w-1/4 sm:mb-0 space-y-5 mb-10">
            <Image src={logo} alt="" />
            <p className="text-white text-left">
              The proper Footer on proper time can preserve you protection. We
              assist you make sureevery body forward.preserve you protection. We
              assist you make sureevery body forward.
            </p>
            <div className="flex gap-x-5">
              <div className="h-6 w-6 rounded-full cursor-pointer bg-white text-primary flex items-center justify-center transition-colors duration-300 hover:text-white hover:bg-primary">
                <FaFacebookF />
              </div>
              <div className="h-6 w-6 rounded-full cursor-pointer bg-white text-primary flex items-center justify-center transition-colors duration-300 hover:text-white hover:bg-primary">
                <IoLogoWhatsapp />
              </div>
              <div className="h-6 w-6 rounded-full cursor-pointer bg-white text-primary flex items-center justify-center transition-colors duration-300 hover:text-white hover:bg-primary">
                <FaInstagram />
              </div>
              <div className="h-6 w-6 rounded-full cursor-pointer bg-white text-primary flex items-center justify-center transition-colors duration-300 hover:text-white hover:bg-primary">
                <IoLogoYoutube />
              </div>
            </div>
          </div>
          <div className="w-3/4 flex flex-wrap gap-y-5 justify-center items-start md:justify-end">
            {/* Menu 1 */}
            <div class="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
              {/* Column 2 content */}
              <ul className="space-y-3">
                <li className=" text-white text-xl font-medium mb-5">
                  <a
                    href=""
                    className=" hover:text-primary  transition duration-300 ease-in-out"
                  >
                    {" "}
                    মূল পেজস্
                  </a>
                </li>
                <Image src={dash} alt="" className="mb-5" />

                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <MdKeyboardArrowRight className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    আমাদের গল্প
                  </a>
                </li>
                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <MdKeyboardArrowRight className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    কিছু জিজ্ঞাসা
                  </a>
                </li>
                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <MdKeyboardArrowRight className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    পাত্র-পাত্রীর বায়োডাটা
                  </a>
                </li>
                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <MdKeyboardArrowRight className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    প্রোফাইল
                  </a>
                </li>
                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <MdKeyboardArrowRight className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    মেম্বারশিপ প্লান
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
              {/*  Column 3 content  */}
              {/* Menu 1 */}

              <ul className="space-y-3">
                <li className=" text-white text-xl font-medium mb-5">
                  <a
                    href=""
                    className=" hover:text-primary  transition duration-300 ease-in-out"
                  >
                    {" "}
                    এডমিন পেজস্
                  </a>
                </li>
                <Image src={dash} alt="" className="mb-5" />

                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <MdKeyboardArrowRight className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    যোগাযোগ
                  </a>
                </li>
                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <MdKeyboardArrowRight className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    গোপনীয়তা পলিসিস্
                  </a>
                </li>
                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <MdKeyboardArrowRight className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    রিফান্ড পলিসিস্
                  </a>
                </li>
                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <MdKeyboardArrowRight className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    প্রাইভেসি পলিসিস্
                  </a>
                </li>
                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <MdKeyboardArrowRight className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    ট্রামস্ এনড কন্ডিশন
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
              {/*  Column 4 content */}
              {/* Menu 3 */}

              <ul className="space-y-3">
                <li className=" text-white text-xl font-medium mb-5">
                  <a
                    href=""
                    className=" hover:text-primary  transition duration-300 ease-in-out"
                  >
                    {" "}
                    জরুরী যোগাযোগ
                  </a>
                </li>
                <Image src={dash} alt="" className="mb-5" />

                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <FaPhoneAlt className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    (123)456-78-90{" "}
                  </a>
                </li>
                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <BiLogoGmail className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    nikahdeen@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-x-2 text-white font-medium">
                  {" "}
                  <MdHome className="text-xl" />
                  <a
                    href=""
                    className=" hover:text-primary transition duration-300 ease-in-out"
                  >
                    Dhaka, Bangladesh
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-white font-normal mt-10 ">
          স্বত্ব © ২০২৩ <span className="text-primary">নিকাহ্ দ্বীন </span>
          কর্তৃক সর্বস্বত্ব সংরক্ষিত
        </p>
      </footer>
    </div>
  );
}
