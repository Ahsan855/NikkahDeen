import Link from "next/link";

export default function HomeMenu() {
  return (
    // Home Menu Here is the desktop menu
    <div>
      <ul className="flex gap-x-9  items-center justify-center dark:text-white text-seocundary">
        <li>
          <Link
            href="/"
            className=" text-lg hover:text-primary transition duration-300 ease-in-out"
          >
            আমাদের গল্প
          </Link>
        </li>
        <li>
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
    </div>
  );
}
