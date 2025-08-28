"use client";
import { Image } from "@heroui/react";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

export default function Card({
  image,
  productname,
  newPrice,
  oldPrice,
  off,
  type,
}) {
  const [color, setcolor] = useState(false);
  if (color == true) {
    console.log("liked item");
  }
  console.log(type);
  return (
    <>
      <div className=" border-2 border-gray-200  hover:shadow-lg hover:shadow-gray-200  rounded-xl ">
        <div className="relative ">
          {" "}
          <Image
            width="1"
            height="1"
            alt="product image"
            radius="none"
            classNames={{
              wrapper: "z-0",
              img: " rounded-t-xl object-cover w-full h-[200px] sm:h-[210px] md:[230px] ",
            }}
            className="z-50"
            src={image}
          />
          <button
            onClick={() => setcolor(!color)}
            className="absolute top-3 cursor-pointer right-4 "
          >
            <FaHeart
              size={20}
              className={
                color == true
                  ? `hover:transition-transform hover:duration-300  text-red-600 hover:transform hover:scale-130`
                  : `hover:transition-transform hover:duration-300 hover:transform hover:scale-170 text-gray-400`
              }
            />
          </button>
          <span
            className={
              off?.length < 1
                ? `hidden`
                : `text-sm border rounded-xl border-red-500 absolute top-2 left-2 bg-red-500 text-white px-2 py-1`
            }
          >
            {off}
          </span>
          <span
            className={
              type == "NEW"
                ? `text-sm border rounded-xl border-green-500 absolute top-2 left-2 bg-green-500 text-white px-2 py-1`
                : type == "SALE"
                ? `text-sm border rounded-xl border-blue-500 absolute top-2 left-2 bg-blue-500 text-white px-2 py-1`
                : type == "HOT"
                ? `text-sm border rounded-xl border-orange-500 absolute top-2 left-2 bg-orange-500 text-white px-2 py-1`
                : "hidden"
            }
          >
            {type}
          </span>
        </div>
        <div className="p-4">
          <p className="font-semibold text-gray-900 mb-2">{productname}</p>
          <span></span>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-start item-center space-x-2">
              <span className="text-2xl font-bold">{newPrice}</span>
              <span className="line-through flex justify-center items-center bg-gray-200">
                {oldPrice}
              </span>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg  ">
              <FaCartPlus className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
