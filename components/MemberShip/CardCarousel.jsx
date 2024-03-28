import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function CardCarousel() {
  return (
    <div className="container mx-auto pt-20 mb-10 px-5">
      <div className="flex flex-wrap items-center justify-center gap-y-5">
        {/* Card 1 */}

        <div className="h-[441px] md:w-[346px] px-5 py-10 w-full bg-white dark:bg-dark dark:text-white text-seocundary">
          <div>
            <div className="mt-6 flex  justify-between items-center">
              <div>
                <p className=" text-2xl text-primary font-semibold">মাসিক</p>

                <p className="text-2xl font-bold dark:text-white text-black  mb-2">
                  ৳৬৯৯
                </p>
              </div>
            </div>
          </div>
          <div>
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
                <ImCross /> সরাসরি ৫টি প্রস্তাব গ্রহণ করতে পারবেন
              </li>
            </ul>
            <div className="text-center mt-8">
              <button className="hover:border dark:border-primary dark:hover:border-white bg-primary dark:text-white hover:border-primary hover:bg-white dark:hover:text-primary hover:text-primary text-white  font-semibold border   py-3 w-[240px]">
                এপ্লাই করুন
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}

        <div className="h-[606px] p-10 w-full md:w-[446px] bg-seocundary">
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
            <div className="mt-8 text-center">
              <button className="border bg-white hover:border-primary hover:bg-primary dark:hover:text-white hover:text-white text-seocundary dark:text-primary font-semibold py-3 w-[240px]">
                এপ্লাই করুন
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}

        <div className="h-[441px] md:w-[346px] px-5 py-10 w-full bg-white dark:bg-dark dark:text-white text-seocundary ">
          <div>
            <div className="mt-6 flex  justify-between items-center">
              <div>
                <p className=" text-2xl text-primary font-semibold">
                  ষান্মাসিক
                </p>

                <p className="text-2xl font-bold dark:text-white text-black  mb-2">
                  ৳৪,২০০
                </p>
              </div>
            </div>
          </div>
          <div>
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
            <div className="mt-10 text-center">
              <button className="border hover:border dark:border-primary dark:hover:border-white bg-primary dark:text-white hover:border-primary hover:bg-white dark:hover:text-primary hover:text-primary text-white  font-semibold  py-3 w-[240px]">
                এপ্লাই করুন
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <button className="border border-white hover:border-white hover:bg-white hover:text-primary text-white dark:text-primary font-semibold rounded-md px-10 py-2">
          আরও দেখুন
        </button>
      </div>
    </div>
  );
}
