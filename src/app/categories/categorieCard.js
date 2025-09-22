"use client";
import { Image } from "@heroui/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CategorieCard({
  image,
  categories,
  totalProduct,
  StartingPrice,
}) {
  return (
    <>
      <div className=" border-2 group  border-b-0  border-gray-200 shadow-[-0px_0px_5px_rgb(212,212,212)] hover:shadow-[-0px_0px_10px_rgb(115,115,115)] hover:border-0  hover:-translate-y-3 transition-all duration-300  flex flex-col h-full     ">
        <div className="relative ">
          {" "}
          <Link href="/products">
            <Image
              width="1"
              height="1"
              alt="product image"
              radius="none"
              classNames={{
                wrapper: "z-0",
                img: "  object-cover w-full  h-[140px]  sm:h-[200px] md:[230px] ",
              }}
              className="z-50 group:hover:animate-pulse"
              src={image}
            />
          </Link>
        </div>
        <div className="p-2 sm:p-3 md:p-4 flex flex-col  h-full ">
          <Link href="/products">
            <div className="font-normal sm:font-semibold text-small sm:text-lg lg:text-xl text-neutral-900 mb-1 ">
              {categories}
            </div>
          </Link>
          <div className="text-sm sm:text-md text-neutral-600 mb-2">
            {totalProduct} products
          </div>

          <div className="font-normal flex flex-row justify-between gap-4 item-center sm:font-semibold text-small sm:text-sm lg:text-md text-gray-900 ">
            <span className="text-xs font-normal text-neutral-500">
              Starting from {StartingPrice}
            </span>
            <Link href="/products">
              <button className="group-hover:animate-bounce   cursor-pointer">
                <FaArrowRightLong
                  className=" size-[15px]   group:hover:scale-110 group-hover:text-purple-600 group-hover:scale-110 hover:duration-200 hover:transition-transform sm:size-[20px]"
                  size={20}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
