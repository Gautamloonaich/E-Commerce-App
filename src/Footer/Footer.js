"use client";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <div className=" relative  ">
        <div className="bg-[rgb(17,24,39)] sticky bottom-0  w-full item-center justify-center hidden sm:flex">
          <div className="my-12 sm:w-[93%]  md:w-[90%] lg:w-[85%]   ">
            <div className="flex  flex-col md:flex-row justify-between items-start gap-8  ">
              <div className=" w-[100%] md:w-[25%]">
                <h1 className="mb-4 text-xl font-bold text-indigo-600">
                  ShopHub
                </h1>
                <p className="text-gray-300 opacity-75 mr-6 mb-4">
                  Your one-stop destination for all your shopping needs.
                </p>
                <div className="flex space-x-[16px]">
                  <FaFacebook
                    size={22}
                    className="text-gray-400  hover:text-white cursor-pointer"
                  />
                  <FaTwitter
                    size={22}
                    className="text-gray-400  hover:text-white cursor-pointer"
                  />
                  <FaInstagram
                    size={22}
                    className="text-gray-400  hover:text-white cursor-pointer"
                  />
                </div>
              </div>
              <div className="w-[100%] md:w-[25%]">
                <h1 className="text-[18px] font-semibold text-white mb-4 ">
                  Quick Links
                </h1>
                <ul className="[&>*]:text-gray-300 [&>*]:opacity-75 [&>*]:cursor-pointer [&>*]:hover:text-white [&>*]:ml-1 [&>*]:hover:opacity-100  [&>*]:mt-1.5">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>FAQ</li>
                  <li>
                    <Link href="/cart">Shipping</Link>
                  </li>
                </ul>
              </div>
              <div className="w-[100%] md:w-[25%]">
                <h1 className="text-[18px] font-semibold text-white mb-4 ">
                  Categories
                </h1>
                <ul className="[&>*]:text-gray-300 [&>*]:opacity-75 [&>*]:hover:text-white [&>*]:ml-1 [&>*]:hover:opacity-100  [&>*]:mt-1.5">
                  <li>
                    <Link href="/products">Electronics</Link>
                  </li>
                  <li>
                    <Link href="/products">Fashion</Link>
                  </li>
                  <li>
                    <Link href="/products">Home & Garden</Link>
                  </li>
                  <li>
                    <Link href="/products">Sports</Link>
                  </li>
                </ul>
              </div>
              <div className="w-[100%] md:w-[25%]">
                <h1 className="text-[18px] font-semibold text-white mb-4 ">
                  Newsletter
                </h1>
                <div className="ml-1">
                  <p className="text-gray-300 opacity-75 mb-4">
                    Subscribe for deals and updates
                  </p>
                  <div className="max-w-[100%] border flex  flex-row  rounded-lg">
                    <input
                      type="email"
                      placeholder="Your email.."
                      className=" w-[80%] border-2 focus:border-[rgb(79,70,229)]  outline-0 rounded-l-lg border-gray-500  opacity-50 bg-gray-600 text-white "
                    />
                    <button className="border-2 border-l-0 rounded-r-lg bg-[rgb(79,70,229)] border-[rgb(79,70,229)] active:bg-[rgb(40,29,247)] active:border-[rgb(40,29,247)] sm:px-6 md:px-2 lg:px-4 sm:py-3 md:py-1.5 lg:py-2.5">
                      <FaTelegramPlane className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 pt-4 text-center text-gray-500 border-t-1  border-gray-400 opacity-75">
              © 2024 ShopHub. All rights reserved.
            </p>
          </div>
        </div>
        <div className=" flex sm:hidden fixed bottom-0 border-t-1 bg-white border-gray-300 w-full">
          <div className="py-2 flex justify-around items-center w-full  [&>*]:text-xs [&>*]:text-gray-400 ">
            <button
              onClick={() => router.push("/")}
              className=" cursor-pointer flex flex-col group [&>*]:group-hover:text-blue-600  justify-center items-center py-2 px-3 space-y-1"
            >
              <HiHome size={24} className="" />
              <span className="font-medium ">Home</span>
            </button>

            <button
              onClick={() => router.push("/")}
              className=" flex cursor-pointer flex-col group [&>*]:group-hover:text-blue-600 justify-center items-center py-2 px-3 space-y-1"
            >
              <IoSearch size={24} />
              <span className="font-medium">Search</span>
            </button>

            <button
              onClick={() => router.push("/categories")}
              className=" flex cursor-pointer flex-col group [&>*]:group-hover:text-blue-600 justify-center items-center py-2 px-3 space-y-1"
            >
              <TfiMenuAlt size={24} />

              <span className="font-medium">Categories</span>
            </button>

            <button
              onClick={() => router.push("/profile")}
              className=" flex  cursor-pointer flex-col group [&>*]:group-hover:text-blue-600 justify-center items-center py-2 px-3 space-y-1"
            >
              <RxAvatar size={24} />
              <span className="font-medium">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
