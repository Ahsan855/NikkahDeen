"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import img from "@/assets/image/Rectangle 29.png";
import Image from "next/image";

export default function SignIn() {
  const [open, setOpen] = useState(false);

  const handleRes = (e) => {
    e.preventDefault();
    const inputValue = e.target.capraInput?.value;
    const myVal = Number(inputValue);
    let email = e.target.email.value;
    let password = e.target.password.value;
  };

  return (
    <div className="container mx-auto p-5">
      <div className="w-full mx-auto shadow-lg dark:bg-dark bg-white flex">
        <div className="w-full md:w-1/2 mx-auto">
          <Image className="md:h-[100vh]" src={img} alt="signIn" />
        </div>
        <form className="w-full md:w-1/2 p-5 flex-1">
          <div>
            <div className="flex flex-col justify-center  gap-2 ">
              <label htmlFor="Email">Email address</label>
              <input
                className="border rounded-md w-[100%] p-2 mx-auto hover:border-gray-700 border-gray-400"
                type="email"
                name="email"
                id="Email"
                required
              />
              <label htmlFor="Password">Password</label>
              <div className="relative">
                <input
                  className="border rounded-md w-[100%] p-2 mx-auto hover:border-gray-700 border-gray-400"
                  type={`${open ? "text" : "password"}`}
                  name="password"
                  id="Password"
                  required
                />
                <span
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer absolute top-3 right-5"
                >
                  {open ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
                <Link href="/signup">
                  New To this website
                  <span className="text-primary text-xl font-medium pl-[8px]">
                    Signup
                  </span>
                </Link>
                <h1 className="lg:text-right cursor-pointer hover:text-blue-500">
                  Forgot password?
                </h1>
              </div>

              <div className="flex justify-center mt-7">
                <button
                  type="submit"
                  className="bg-primary rounded-lg hover:bg-[#0C2D57] duration-500 text-white px-20 w-full py-3"
                >
                  Signin
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
