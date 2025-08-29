"use client";
import { Image } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CategorieCard({
  image,
  categories,
  totalProduct,
  StartingPrice,
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
        </div>
        <div className="p-2 sm:p-3 md:p-4 flex flex-col  h-full ">
          <div className="font-normal sm:font-semibold text-small sm:text-lg lg:text-xl text-neutral-900 mb-1 ">
            {categories}
          </div>
          <div className="text-sm sm:text-md text-neutral-600 mb-2">
            {totalProduct} products
          </div>

          <div className="font-normal flex flex-row justify-between gap-4 item-center sm:font-semibold text-small sm:text-sm lg:text-md text-gray-900 ">
            <span className="text-xs font-normal text-neutral-500">
              Starting from {StartingPrice}
            </span>
            <button className="">
              <FaArrowRightLong
                className="text-neutral-400 size-[15px] hover:text-neutral-600 hover:scale-110 hover:duration-200 hover:transition-transform sm:size-[20px]"
                size={20}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
