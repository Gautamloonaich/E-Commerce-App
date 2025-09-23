"use client";
import { Image } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

export default function TrendingProductCard({
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
        <div className=" border-2 group hover:border-0  md:w-50 lg:w-60  flex flex-col h-[263px] sm:h-[320px]  md:h-[330px] lg:h-[320px]  border-gray-200 shadow-[-2px_2px_5px_rgb(212,212,212)] hover:shadow-[-6px_6px_10px_rgb(163,163,163)] sm:hover:shadow-[-6px_6px_10px_rgb(115,115,115)] hover:-translate-y-3 transition-all duration-300  rounded-xl ">
            <div className="relative ">
                {" "}
                <Link href="/products/1">
                    <Image
                        width="1"
                        height="1"
                        isZoomed
                        alt="product image"
                        radius="none"
                        classNames={{
                            wrapper: "z-0",
                            img: " rounded-t-xl object-cover w-full h-[120px] sm:h-[160px] md:h-[200px] ",
                            zoomedWrapper: "overflow-hidden rounded-t-lg",
                        }}
                        className="z-50"
                        src={image}
                    />
                    <div className="absolute inset-0 rounded-t-xl bg-gradient-to-tr from-indigo-300 to-pink-300 opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>

                </Link>
                <button
                    onClick={() => setcolor(!color)}
                    className="absolute top-1.5 md:top-3 right-2 md:right-4 cursor-pointer  "
                >
                    <FaHeart
                        className={
                            color == true
                                ? `hover:transition-transform hover:duration-300 size-4 md:size-5 animate-blink text-red-600 hover:transform hover:scale-120 md:hover:scale-130`
                                : `hover:transition-transform hover:duration-300  size-4 md:size-5 hover:transform hover:scale-170 text-gray-400`
                        }
                    />
                </button>
                <span
                    className={
                        off?.length < 1
                            ? `hidden`
                            : `text-xs animate-pulse md:text-sm font-light md:font-normal border   rounded-xl border-red-500 absolute top-1 left-1 md:top-2 md:left-2 bg-red-500 text-white px-0.5 md:px-2  py-0 md:py-1`
                    }
                >
                    {off}
                </span>
                <span
                    className={
                        type == "NEW"
                            ? `text-xs md:text-sm animate-pulse font-light md:font-normal  border rounded-xl border-green-500  absolute top-1 left-1 md:top-2 md:left-2 bg-green-500 text-white px-0.5 md:px-2  py-0 md:py-1`
                            : type == "SALE"
                                ? `text-xs md:text-sm animate-pulse font-light md:font-normal  border rounded-xl border-blue-500  absolute top-1 left-1 md:top-2 md:left-2 bg-blue-500 text-white px-0.5 md:px-2  py-0 md:py-1`
                                : type == "HOT"
                                    ? `text-xs md:text-sm animate-pulse font-light md:font-normal border rounded-xl border-orange-500  absolute top-1 left-1 md:top-2 md:left-2 bg-orange-500 text-white px-0.5 md:px-2  py-0 md:py-1`
                                    : "hidden"
                    }
                >
                    {type}
                </span>
            </div>
            <div className="p-2 sm:p-3 md:p-4 flex flex-col h-full justify-around group ">
                <Link href="/products/1">
                    <p className="font-normal sm:font-semibold text-small sm:text-sm lg:text-md cursor-pointer  text-neutral-800 hover:text-neutral-900 mb-2">
                        {productname}
                    </p>
                </Link>
                <span></span>
                <div className="flex flex-row justify-between items-end gap-2 h-full m-0 ">
                    <div className="flex flex-col lg:flex-row  justify-start item-center m-0 space-y-0.5 lg:space-x-1">
                        <span className="text-md lg:text-2xl font-bold">{newPrice}</span>
                        <span
                            className={
                                oldPrice?.length >= 1
                                    ? `line-through flex  font-light lg:font-normal text-sm  text-blue-600 justify-center items-center `
                                    : `hidden`
                            }
                        >
                            {oldPrice}
                        </span>
                    </div>
                    <button className="bg-white  opacity-0  group-hover:opacity-100 group-hover:translate-y-0  md:bg-gradient-to-br from-indigo-300 to-indigo-600 cursor-pointer hover:transition-transform hover:duration-300 hover:scale-130 md:hover:scale-110 group-hover:animate-pulse md:text-white px-2 flex  items-end  md:px-4 py-1 md:py-2 rounded-sm sm:rounded-md md:rounded-lg  transition-all duration-300 transform hover:-translate-y-1  ">
                        <FaCartPlus
                            size={17}
                            className="hover:text-indigo-700 text-gray-600 md:text-white sm:hover:text-white "
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
