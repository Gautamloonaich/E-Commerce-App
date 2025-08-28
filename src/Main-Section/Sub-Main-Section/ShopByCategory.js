import { MdOutlineComputer } from "react-icons/md";
import { FaShirt } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { IoGameController } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { MdSportsBaseball } from "react-icons/md";

export default function ShopByCategory() {
  return (
    <>
      <div className="bg-blue flex justify-center items-center ">
        <div className="py-4 px-6 sm:py-8  w-[98%] sm:w-[93%] md:w-[89%] ">
          <h1 className="text-3xl text-gray-900 font-bold text-center mb-12 hidden sm:flex justify-center items-center ">
            Shop by Categories
          </h1>
          <h1 className="text-lg text-gray-900  font-semibold text-center mb-4 flex sm:hidden justify-start items-center ">
            {" "}
            Categories
          </h1>

          <div className=" flex sm:grid sm:grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 overflow-x-auto scrollbar-hide sm:overflow-x-hidden   gap-4 sm:gap-3  [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:items-center [&>*]:space-y-2">
            <div className="">
              <div className=" bg-blue-100 text-blue-600 sm:bg-gradient-to-br sm:from-blue-500 sm:to-blue-600 sm:text-white rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-md sm:hover:shadow-gray-200">
                <MdOutlineComputer size={30} className="w-[18px] sm:w-[25px]" />
              </div>
              <h1 className="font-semibold text-gray-600 text-xs sm:text-base sm:text-gray-900 ">
                Electronics
              </h1>
            </div>
            <div className="">
              <div className="bg-pink-100 text-pink-600 sm:bg-gradient-to-br sm:from-pink-500 sm:to-pink-600 sm:text-white rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-md sm:hover:shadow-gray-200">
                <FaShirt size={25} className="w-[18px] sm:w-[25px]" />
              </div>
              <h1 className="font-semibold text-gray-600 text-xs sm:text-base sm:text-gray-900">
                Fashion
              </h1>
            </div>
            <div className="">
              <div className="bg-green-100 text-green-600 sm:bg-gradient-to-br sm:from-green-500 sm:to-green-600 sm:text-white rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-md sm:hover:shadow-gray-200">
                <TiHome size={25} className="w-[18px] sm:w-[25px]" />
              </div>
              <h1 className="font-semibold text-gray-600 text-xs sm:text-base sm:text-gray-900">
                Home
              </h1>
            </div>
            <div className=" ">
              <div className="bg-yellow-100 text-yellow-600 sm:bg-gradient-to-br sm:from-yellow-500 sm:to-yellow-600 sm:text-white rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-md sm:hover:shadow-gray-200">
                <IoGameController className="w-[18px] sm:w-[25px]" size={25} />
              </div>
              <h1 className="font-semibold text-gray-600 text-xs sm:text-base sm:text-gray-900">
                Gaming
              </h1>
            </div>
            <div className="">
              <div className="bg-purple-100 text-purple-600 sm:bg-gradient-to-br sm:from-purple-500 sm:to-purple-600 sm:text-white rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-md sm:hover:shadow-gray-200">
                <MdSportsBaseball className="w-[18px] sm:w-[25px]" size={25} />
              </div>
              <h1 className="font-semibold text-gray-600 text-xs sm:text-base sm:text-gray-900">
                Sports
              </h1>
            </div>
            <div className=" ">
              <div className="bg-red-100 text-red-600 sm:bg-gradient-to-br sm:from-red-500 sm:to-red-600 sm:text-white rounded-[16px] flex justify-center items-center py-3.5 sm:py-7 px-5 sm:px-18 sm:hover:shadow-md  sm:hover:shadow-gray-200">
                <IoBookSharp size={25} className="w-[18px] sm:w-[25px]" />
              </div>
              <h1 className="font-semibold text-gray-600 text-xs sm:text-base sm:text-gray-900">
                Books
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
