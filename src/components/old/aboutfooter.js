import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function AboutFooter() {
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
                  Creating innovative solutions for a better tomorrow.
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
                <h1 className="text-[18px] font-semibold pl-1 text-white mb-4 cursor-pointer">
                  Company
                </h1>
                <ul className="[&>*]:text-gray-300  [&>*]:opacity-75 [&>*]:hover:text-white [&>*]:ml-1 [&>*]:cursor-pointer [&>*]:hover:opacity-100  [&>*]:mt-1.5">
                  <li><Link href="/about">About</Link> </li>
                  <li>Careers</li>
                  <li>Press</li>
                </ul>
              </div>
              <div className="w-[100%] md:w-[25%]">
                <h1 className="text-[18px] font-semibold pl-1 text-white mb-4 ">
                  Support
                </h1>
                <ul className="[&>*]:text-gray-300 [&>*]:opacity-75 [&>*]:hover:text-white [&>*]:ml-1 [&>*]:cursor-pointer [&>*]:hover:opacity-100  [&>*]:mt-1.5">
                  <li>Help Center</li>
                  <li><Link href="/contact">Contact Us</Link></li>
                  <li><Link href="/cart">Status</Link></li>
                </ul>
              </div>
              <div className="w-[100%] md:w-[25%]">
                <h1 className="text-[18px] font-semibold pl-1 text-white mb-4 ">
                  Legal
                </h1>
                <ul className="[&>*]:text-gray-300 [&>*]:opacity-75 [&>*]:hover:text-white [&>*]:ml-1 [&>*]:cursor-pointer [&>*]:hover:opacity-100  [&>*]:mt-1.5">
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 pt-4 text-center text-gray-500 border-t-1  border-gray-400 opacity-75">
              © 2024 ShopHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
