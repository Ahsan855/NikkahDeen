"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import gsap from "gsap"; // Assuming gsap is imported properly
import { MdMenuOpen } from "react-icons/md";
import Translate from "./Translate";
// Home Menu Here is the Small device menu
export default function SmallMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const menu = document.querySelector(".menu");

    if (isOpen) {
      gsap.to(menu, { duration: 0.2, x: 0, opacity: 1 });
    } else {
      gsap.to(menu, { duration: 0.2, x: "-100%", opacity: 0 });
    }
  }, [isOpen]);

  return (
    <div className="block md:hidden overflow-y-auto">
      {/* menu open toggle bar*/}
      {isOpen ? (
        <ImCross
          onClick={toggleMenu}
          className="text-seocundary font-bold text-4xl p-2 focus:outline-none"
        />
      ) : (
        <MdMenuOpen
          onClick={toggleMenu}
          className="text-seocundary font-bold text-4xl p-2 focus:outline-none"
        />
      )}
      {/*  MdMenuOpen if open menu then show this */}
      {isOpen && (
        <div className="menu absolute  right-0 top-16 w-full py-10 text-white bg-primary">
          <>
            <div className="flex items-center justify-center gap-x-2">
              {/* Translator added */}
              <Translate />
            </div>
            <ul className="flex flex-col items-center justify-center lg:flex-row lg:justify-start">
              <li className="my-4">
                <Link
                  href="/"
                  className="text-lg hover:text-primary transition duration-300 ease-in-out"
                >
                  আমাদের গল্প
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/about"
                  className="text-lg hover:text-primary transition duration-300 ease-in-out"
                >
                  পাত্র-পাত্রীর বিজ্ঞাপন
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg hover:text-primary transition duration-300 ease-in-out"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </>
        </div>
      )}
    </div>
  );
}
