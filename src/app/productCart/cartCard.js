"use client";
import Image from "next/image";
import { GrFormSubtract } from "react-icons/gr";
import { GoPlus } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Button } from "@heroui/react";
import { useState } from "react";

export default function Cartcard({
  productImg,
  productName,
  productNewPrice,
  productOldprice,
  productColor,
  productBrand,
  productSize,
}) {
  const [count, setCount] = useState(1);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count > 0 ? count - 1 : 0);
  }
  let inNumber = Number(productNewPrice.replace(/[^0-9.]/g, ""));
  let finalvalue = inNumber * count;
  let productPrice = `$${Math.floor(finalvalue * 100) / 100}`;

  return (
    <>
      <div className="flex flex-col  px-2 py-6 sm:px-6  ">
        <div className="flex">
          <div className="shrink-0">
            <Image
              src={productImg}
              width="100"
              height="100"
              alt="Product image"
              className="object-cover border-1 border-neutral-200  rounded-md size-20 sm:size-23"
            />
          </div>
          <div className="flex flex-col ml-3 flex-1 items-start justify-start">
            <h1 className="text-md sm:text-lg text-neutral-900">
              {productName}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600">
              Premium Quality Audio
            </p>

            <div className="mt-3 flex  gap-2">
              <p className="text-xs sm:text-sm font-medium">
                Color:{" "}
                <span className="text-neutral-600 text-xs sm:text-sm">
                  {productColor}
                </span>{" "}
              </p>

              <p
                className={
                  productSize == ""
                    ? "hidden"
                    : `text-xs sm:text-sm font-medium`
                }
              >
                Size:
                <span className="text-neutral-600 text-xs sm:text-sm">
                  {" "}
                  {productSize}
                </span>
              </p>
              <p
                className={
                  productBrand == ""
                    ? "hidden"
                    : `text-xs sm:text-sm font-medium`
                }
              >
                Brand:
                <span className="text-neutral-600 text-xs sm:text-sm">
                  {" "}
                  {productBrand}
                </span>
              </p>
            </div>

            <div className=" gap-4 md:gap-6 mt-4 sm:hidden flex justify-between items-center w-full ">
              <div className=" flex flex-col justify-center  items-center ">
                <p className="text-sm text-neutral-900">{productPrice}</p>
                <p className="text-xs text-blue-500 line-through">
                  {productOldprice}
                </p>
              </div>
              <div className="flex gap-2 justify-center pr-3 items-center">
                <button
                  onClick={handleDecrement}
                  className="border rounded-sm border-neutral-300 p-0.5 cursor-pointer"
                >
                  <GrFormSubtract
                    size={17}
                    className="hover:transition-transform hover:scale-140  hover:duration-100"
                  />
                </button>
                <p className="text-sm font-semibold">{count}</p>
                <button
                  onClick={handleIncrement}
                  className="border rounded-sm p-0.5 border-neutral-300 cursor-pointer"
                >
                  <GoPlus
                    size={17}
                    className=" hover:transition-transform hover:scale-140  hover:duration-100"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className=" gap-4 md:gap-6 hidden sm:flex  ">
            <div className="flex gap-4 justify-center  items-center">
              <button
                onClick={handleDecrement}
                className="border rounded-sm border-neutral-300 p-1.5 cursor-pointer"
              >
                <GrFormSubtract
                  size={20}
                  className="hover:transition-transform hover:scale-140  hover:duration-100"
                />
              </button>
              <p className="text-md font-semibold">{count}</p>
              <button
                onClick={handleIncrement}
                className="border rounded-sm p-1.5 border-neutral-300 cursor-pointer"
              >
                <GoPlus
                  size={20}
                  className=" hover:transition-transform hover:scale-140  hover:duration-100"
                />
              </button>
            </div>
            <div className=" flex flex-col justify-center  items-center ">
              <p className="text-lg text-neutral-900">{productPrice}</p>
              <p className="text-sm text-blue-500 line-through">
                {productOldprice}
              </p>
            </div>
            <div className="flex items-center justify-center cursor-pointer ">
              <RiDeleteBin6Line
                size={22}
                className="text-neutral-400 hover:text-neutral-600"
              />
            </div>
          </div>

          <div></div>
        </div>
        <div className="px-4 mt-4 group flex flex-col sm:hidden">
          <hr className="text-neutral-300 "></hr>
          <div className="w-full flex justify-end items-center mt-4 ">
            <Button
              color="default"
              className="px-2 min-w-10 h-8  gap-1 text-xs rounded-sm"
              startContent={
                <RiDeleteBin6Line
                  size={18}
                  className=" group-hover:transition-transform group-hover:duration-200 group-hover:scale-120 hover:text-neutral-600"
                />
              }
              variant="bordered"
            >
              {" "}
              Remove{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export function OrderSummary() {
  return (
    <>
      <div className="bg-white border p- border-neutral-200 rounded-lg  px-2 py-6 sm:px-6 ">
        <h1 className="text-xl text-neutral-900 mb-4">Order Summary</h1>
        <div>
          <div>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Subtotal (3 items)</span>
                <span className="text-neutral-900">$499.97</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Shipping</span>
                <span className="text-neutral-900">$9.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Tax</span>
                <span className="text-neutral-900">$40.00</span>
              </div>
              <div className="flex justify-between  items-center">
                <span className="text-neutral-600">Discount</span>
                <span className="text-neutral-900">-$50.00</span>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-neutral-900">Total</span>
                <span className="text-neutral-900">$499.96</span>
              </div>
            </div>

            <div>
              <p className=" text-sm text-neutral-700 mb-2">Promo Code</p>
              <div className="max-w-full flex  ">
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="w-full py-2 border-2  rounded-l-lg outline-0 focus:border-indigo-400 border-r-0 border-neutral-300"
                />
                <button className="text-white bg-indigo-500 flex items-center justify-center hover:bg-indigo-600 px-3 sm:px-6 rounded-r-lg  lg:px-4 xl:px-5 font-semibold">
                  <p className="flex items-center justify-center hover:transition-transform hover:duration-200 hover:scale-105">
                    Apply
                  </p>
                </button>
              </div>
            </div>
            <div className="max-w-full w-full mt-15 ">
              <Button
                    className="w-full h-11  bg-gradient-to-r text-md sm:text-lg lg:text-md from-indigo-500 to-purple-500 text-white font-semibold border-0"
                    type="submit"
                    variant="bordered"
                  >
                      Proceed to Checkout
                  </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
