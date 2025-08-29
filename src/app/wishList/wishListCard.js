"use client";
import { Image } from "@heroui/react";
import { FaCartPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function WishListCard({
  image,
  productname,
  newPrice,
  oldPrice,
  off,
  type,
}) {
  return (
    <>
      <div className=" border-2 border-b-0 border-gray-200 flex flex-col h-full hover:shadow-lg hover:shadow-gray-200   ">
        <div className="relative ">
          {" "}
          <Image
            width="1"
            height="1"
            alt="product image"
            radius="none"
            classNames={{
              wrapper: "z-0",
              img: "  object-cover w-full  h-[140px]  sm:h-[200px] md:[230px] ",
            }}
            className="z-50"
            src={image}
          />
          <button className="absolute top-1.5 md:top-3 right-2 md:right-4 cursor-pointer  ">
            <MdDelete
              size={23}
              className="hover:transition-transform size-[18px] md:size-[23px] hover:duration-300 hover:transform hover:scale-130 md:hover:scale-170 text-gray-600"
            />
          </button>
          <span
            className={
              off?.length < 1
                ? `hidden`
                : `text-xs md:text-sm font-light md:font-normal border   rounded-xl border-red-500 absolute top-1 left-1 md:top-2 md:left-2 bg-red-500 text-white px-0.5 md:px-2  py-0 md:py-1`
            }
          >
            {off}
          </span>
          <span
            className={
              type == "NEW"
                ? `text-xs md:text-sm font-light md:font-normal  border rounded-xl border-green-500  absolute top-1 left-1 md:top-2 md:left-2 bg-green-500 text-white px-0.5 md:px-2  py-0 md:py-1`
                : type == "SALE"
                ? `text-xs md:text-sm font-light md:font-normal border rounded-xl border-blue-500  absolute top-1 left-1 md:top-2 md:left-2 bg-blue-500 text-white px-0.5 md:px-2  py-0 md:py-1`
                : type == "HOT"
                ? `text-xs md:text-sm font-light md:font-normal border rounded-xl border-orange-500  absolute top-1 left-1 md:top-2 md:left-2 bg-orange-500 text-white px-0.5 md:px-2  py-0 md:py-1`
                : "hidden"
            }
          >
            {type}
          </span>
        </div>
        <div className="p-2 sm:p-3 md:p-4 flex flex-col justify-between gap-3 h-full ">
          <div className="font-normal sm:font-semibold text-small sm:text-sm lg:text-md text-gray-900 ">
            {productname}
          </div>
          <div className="flex flex-row justify-between gap-2 items-center">
            <div className="flex flex-col lg:flex-row  justify-start items-center  space-y-0.5 lg:space-x-1">
              <span className="text-md lg:text-2xl font-bold">{newPrice}</span>
              <span
                className={
                  oldPrice?.length >= 1
                    ? `line-through flex  font-light lg:font-normal text-sm  justify-center items-center bg-gray-200`
                    : `hidden`
                }
              >
                {" "}
                {oldPrice}
              </span>
            </div>
            <button className="bg-white  sm:bg-indigo-600  hover:transition-transform hover:duration-300 hover:scale-130 sm:hover:scale-110  sm:text-white px-2 flex  items-end  md:px-4 py-1 md:py-2 rounded-sm sm:rounded-md md:rounded-lg  ">
              <FaCartPlus
                size={17}
                className="hover:text-indigo-700 text-gray-600 sm:text-white sm:hover:text-white "
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
