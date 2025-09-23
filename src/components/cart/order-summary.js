"use client"
import { Button } from "@heroui/react";
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaLock } from "react-icons/fa";

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
                        <div className="flex flex-col gap-3 justify-center items-center mt-4">
                            <div className="flex gap-2 items-center justify-center">
                                <FaLock size={16} className="text-neutral-600 size-4 " />
                                <span className="text-sm text-neutral-600">
                                    Secure Checkout
                                </span>
                            </div>
                            <div className="flex gap-3 items-center justify-center">
                                <FaCcVisa size={22} className="text-neutral-400" />
                                <FaCcMastercard size={22} className="text-neutral-400" />
                                <FaCcPaypal size={22} className="text-neutral-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}