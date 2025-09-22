import { MdOutlineComputer } from "react-icons/md";
import { FaShirt } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { IoGameController } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { MdSportsBaseball } from "react-icons/md";
import Link from "next/link";

export default function ShopByCategory() {
  return (
    <>
      <div className="bg-blue flex justify-center items-center ">
        <div className="py-4 px-6 sm:py-8  w-[98%] sm:w-[93%] md:w-[89%] ">
          <h1 className="text-3xl text-gray-900 font-bold text-center mb-12 hidden sm:flex justify-center items-center ">
            Explor Populer Categories
          </h1>
          <h1 className="text-lg text-gray-900  font-semibold text-center mb-4 flex sm:hidden justify-start items-center ">
            {" "}
            Populer Categories
          </h1>

          <div className=" flex pt-1 sm:grid sm:grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 overflow-x-auto scrollbar-hide sm:overflow-x-hidden   gap-4 sm:gap-3  [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:items-center [&>*]:space-y-2">
            <div className="">
              <Link href="/products">
                <div className=" bg-gradient-to-br from-blue-100 to-blue-400 text-blue-600  cursor-pointer    rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-lg sm:hover:shadow-blue-200 hover:scale-95 hover:duration-200">
                  <MdOutlineComputer
                    size={30}
                    className="w-[18px] sm:w-[25px]"
                  />
                </div>
              </Link>
              <Link href="/products">
                <h1 className="font-semibold text-gray-600 text-xs pt-1.5 sm:text-base sm:text-gray-900 ">
                  Electronics
                </h1>
              </Link>
            </div>
            <div className="">
              <Link href="/products">
                <div className=" bg-gradient-to-br from-pink-100 to-pink-400  text-pink-600  cursor-pointer ring-0 ring-pink-300   rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-lg sm:hover:shadow-pink-200 hover:scale-95 hover:duration-200">
                  <FaShirt size={25} className="w-[18px] sm:w-[25px]" />
                </div>
              </Link>
              <Link href="/products">
                <h1 className="font-semibold text-gray-600 text-xs  pt-1.5 sm:text-sm  cursor-pointer sm:text-gray-900">
                  Fashion
                </h1>
              </Link>
            </div>
            <div className="">
              <Link href="/products">
                <div className=" bg-gradient-to-br from-green-100 to-green-400  text-green-600  cursor-pointer ring-0 ring-green-300 rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-lg sm:hover:shadow-green-200 hover:scale-95 hover:duration-200">
                  <TiHome size={25} className="w-[18px] sm:w-[25px]" />
                </div>
              </Link>
              <Link href="/products">
                <h1 className="font-semibold text-gray-600 text-xs  pt-1.5 sm:text-sm  cursor-pointer sm:text-gray-900">
                  Home
                </h1>
              </Link>
            </div>
            <div className=" ">
              <Link href="/products">
                <div className=" bg-gradient-to-br from-amber-100 to-amber-400  text-amber-600  cursor-pointer ring-0 ring-amber-300 rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-lg sm:hover:shadow-amber-200 hover:scale-95 hover:duration-200">
                  <IoGameController
                    className="w-[18px] sm:w-[25px]"
                    size={25}
                  />
                </div>
              </Link>
              <Link href="/products">
                <h1 className="font-semibold text-gray-600 text-xs  pt-1.5 sm:text-sm  cursor-pointer sm:text-gray-900">
                  Gaming
                </h1>
              </Link>
            </div>
            <div className="">
              <Link href="/products">
                <div className="bg-gradient-to-br from-purple-100 to-purple-400  text-purple-600  cursor-pointer ring-0 ring-purple-300 rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-lg sm:hover:shadow-purple-200 hover:scale-95 hover:duration-200">
                  <MdSportsBaseball
                    className="w-[18px] sm:w-[25px]"
                    size={25}
                  />
                </div>
              </Link>
              <Link href="/products">
                <h1 className="font-semibold text-gray-600 text-xs   pt-1.5 sm:text-sm  cursor-pointer sm:text-gray-900">
                  Sports
                </h1>
              </Link>
            </div>
            <div className=" ">
              <Link href="/products">
                <div className="bg-gradient-to-br from-red-100 to-red-400  text-red-600  cursor-pointer ring-0 ring-red-300 rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-lg  sm:hover:shadow-red-200 hover:scale-95 hover:duration-200">
                  <IoBookSharp size={25} className="w-[18px] sm:w-[25px]" />
                </div>
              </Link>
              <Link href="/products">
                <h1 className="font-semibold text-gray-600 text-xs  pt-1.5 sm:text-sm  cursor-pointer sm:text-gray-900">
                  Books
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
