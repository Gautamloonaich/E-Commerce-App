"use client";
import { Image } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

export default function FeaturedProductCard({
    image,
    productname,
    newPrice,
    oldPrice,
    brand,
    rating,
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
            <div className=" border-2 group  border-gray-200   shadow-[-1px_4px_5px_rgb(212,212,212)] hover:shadow-[-0px_0px_10px_rgb(64,64,64)] hover:border-0 group  transition-transform duration-300 hover:scale-105 animate-fade-in hover:[transform:perspective(600px)_rotateX(6deg)] rounded-xl ">
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
                                img: " rounded-t-xl object-cover w-full h-[200px] sm:h-[210px] md:[230px] ",
                                zoomedWrapper: "overflow-hidden rounded-t-xl",
                            }}
                            className="z-50"
                            src={image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr rounded-t-xl from-indigo-400 to-pink-400 opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>

                    </Link>
                    <button
                        onClick={() => setcolor(!color)}
                        className="absolute top-3 cursor-pointer right-4"
                    >
                        <FaHeart
                            size={20}
                            className={
                                color == true
                                    ? `hover:transition-transform hover:duration-300 transition-all animate-blink text-red-600 hover:transform hover:scale-130`
                                    : `hover:transition-transform hover:duration-300  transition-all hover:transform hover:scale-170 text-gray-400`
                            }
                        />
                    </button>
                    <span
                        className={
                            off?.length < 1
                                ? `hidden`
                                : `text-sm border  animate-bounce   rounded-xl border-red-500 absolute top-2 left-2 bg-red-500 text-white px-2 py-1`
                        }
                    >
                        {off}
                    </span>
                    <span
                        className={
                            type == "NEW"
                                ? `text-sm border rounded-xl  animate-pulse  border-green-500 absolute top-2 left-2 bg-green-500 text-white px-2 py-1`
                                : type == "SALE"
                                    ? `text-sm border rounded-xl animate-bounce  border-blue-500 absolute top-2 left-2 bg-blue-500 text-white px-2 py-1`
                                    : type == "HOT"
                                        ? `text-sm border rounded-xl animate-pulse border-orange-500 absolute top-2 left-2 bg-orange-500 text-white px-2 py-1`
                                        : "hidden"
                        }
                    >
                        {type}
                    </span>
                </div>
                <div className="p-4">
                    <p className="text-sm font-medium text-neutral-700">{brand}</p>
                    <Link href="/products/1">  <p className="font-semibold cursor-pointer text-gray-900 mb-2">{productname}</p></Link>
                    <p className="text-sm font-light transition-all -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300  ">{rating}</p>
                    <div className="flex flex-row justify-between mt-2 items-center">
                        <div className="flex flex-row justify-start item-center space-x-2">
                            <span className="text-2xl font-bold">{newPrice}</span>
                            <span className="line-through flex justify-center items-center text-blue-600 ">
                                {oldPrice}
                            </span>
                        </div>
                        <button className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white px-4 py-2 group-hover:animate-pulse rounded-lg transition-all duration-300 transform hover:-translate-y-2 ">
                            <FaCartPlus className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
