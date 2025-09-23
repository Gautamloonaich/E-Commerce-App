"use client";
import { Button, Input } from "@heroui/react";
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";

export default function SearchBar() {
    return (
        <>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hidden sm:flex justify-center w-full items-center min-h-[440px] mt-[72px] ">
                <div className=" w-full max-w-[90%] flex flex-col justify-center items-center space-y-6 mb-5 ">
                    <h1 className=" text-4xl animate-blink  duration-1000 md:text-5xl lg:text-6xl font-bold mb-1.5rem text-center ">
                        Find Everything You Need
                    </h1>
                    <p className="text-xl  mb-2rem">
                        Discover amazing products at unbeatable prices
                    </p>
                    <div className="w-full  sm:max-w-[380px] md:max-w-[530px] lg:max-w-[700px] flex justify-center items-center flex-wrap   ">
                        <Input
                            radius="full"
                            size="lg"
                            variant=""
                            placeholder="Search for products,brands,categories...."
                            classNames={{
                                mainWrapper: "w-full flex item-center justify-center",
                                inputWrapper: "h-[60px]",
                            }}
                            endContent={
                                <Button
                                    radius="full"
                                    size="sm"
                                    className=" bg-[rgb(79,70,229)] shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300 mr-[-6px] min-w-[50px] md:min-w-[58px]  "
                                >
                                    {<IoSearch className="font-bold  text-white" size={18} />}
                                </Button>
                            }
                            className="rounded-4xl flex justify-between items-center bg-white/100 backdrop-blur-md  transform hover:scale-105   shadow-lg focus:ring-3 focus:outline-none transition-all duration-300 ring-3 ring-transparent focus-within:ring-purple-400 text-black  border-0 "
                        />
                    </div>
                </div>
            </div>
            <div className="flex sm:hidden px-[24px] py-[16px] mt-[72px]">
                <div className="flex w-full md:flex-nowrap gap-4">
                    <Input
                        size="lg"
                        variant="flat"
                        va
                        placeholder="Search products..."
                        className=" "
                        startContent={
                            <IoSearch
                                size={20}
                                className="text-gray-600 mr-2 ml-1 text-bold  mt-0.5"
                            />
                        }
                        endContent={
                            <FaFilter
                                size={20}
                                className="text-gray-600 mr-1 mt-0.5 text-bold "
                            />
                        }
                        classNames={{
                            input: "h-[45px] ",
                            inputWrapper:
                                "h-[45px] rounded-xl group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-gray-200 focus-within:bg-white",
                        }}
                    />
                </div>
            </div>
        </>
    );
}
