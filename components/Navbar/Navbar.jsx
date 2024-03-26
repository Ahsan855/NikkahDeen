import Image from "next/image";
import logo from "@/assets/image/navbar/logo.png";
import { LuUser2 } from "react-icons/lu";
import { GoBell } from "react-icons/go";
import Translate from "@/components/Menu/Translate";
import HomeMenu from "@/components/Menu/HomeMenu";
import SmallMenu from "@/components/Menu/SmallMenu";
import ThemeToggle from "../Theme/ThemeToggle";

export default function Navbar() {
  return (
    <div className="z-10 mb-24 md:mb-32">
      <div className="fixed top-0 w-full dark:bg-dark dark:text-white  shadow-md bg-white  dark:shadow-md ">
        <div className="container mx-auto">
          <div className="flex justify-between h-16 px-5 md:h-20 items-center">
            <div className="text-white">
              <Image
                src={logo}
                className="w-42 h-9 cursor-pointer"
                alt="Logo"
              />
            </div>

            <div className="hidden md:block">
              <HomeMenu />
            </div>
            {/*Small divice menu DropdownMenu */}
            <div className="md:hidden block">
              <div className="flex justify-between items-center gap-x-2">
                <div className="flex gap-x-2 text-lg ">
                  <div className="relative cursor-pointer dark:text-white">
                    <GoBell className="text-3xl" />
                    <div className="h-3 w-3 p-[8px] top-0 right-0 absolute rounded-full bg-primary flex items-center justify-center text-[9px] text-white">
                      ০৫
                    </div>
                  </div>
                  <LuUser2 className="cursor-pointer text-3xl dark:text-white" />
                </div>
                <SmallMenu />

                <ThemeToggle />
              </div>
            </div>
            {/* Desktop User Bell And Toggoler  translator Device */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between md:gap-x-5">
                  <div className="flex items-center gap-x-5 text-lg ">
                    {/* Translator added */}
                    <Translate />

                    <div className="relative cursor-pointer dark:text-white">
                      <GoBell className="text-3xl" />
                      <div className="h-3 w-3 p-[8px] top-0 right-0 absolute rounded-full bg-primary flex items-center justify-center text-[9px] text-white">
                        ০৫
                      </div>
                    </div>

                    <LuUser2 className="cursor-pointer text-3xl dark:text-white" />

                    <div className="hidden md:block">
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
