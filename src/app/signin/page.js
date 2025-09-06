"use client";
import { Form, Input, Button } from "@heroui/react";
import { TbEyeFilled } from "react-icons/tb";
import { PiEyeSlashFill } from "react-icons/pi";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loginimage from "../../../public/loginImage04.jpg";
import NavbarLogin from "../login/navbar";
import { FaGreaterThan } from "react-icons/fa";
import { NextLink } from "next/link";

export default function Signin() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [fullName, setFullName] = useState("");
  const [nameError, serNameError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassward] = useState("");

  function handlesumbit(e) {
    e.preventDefault();
    if (fullName.length == 0) {
      serNameError("Enter Your Name");
    } else {
      serNameError("");
    }

    console.log("create account");
  }

  return (
    <div className="h-full w-full">
      <NavbarLogin />
      <div className="w-full h-screen flex flex-col justify-center items-center pt-[72px] px-4 xs:px-8  sm:px-6 md:px-16 lg:px-18 xl:px-27 ">
        <h1 className=" text-3xl  w-full font-semibold text-zinc-700 flex  justify-center items-center sm:hidden  mt-0">
          Create Account
        </h1>
        <div className="max-w-4xl  w-full grid flex-col sm:grid-cols-2 rounded-md sm:rounded-0 mt-5 sm:mt-0 sm:py-0 bg-indigo-50 bg-gradient-to-b from-indigo-100 to-purple-100 ring-2 ring-indigo-300   ">
          <div className="flex justify-center flex-col items-center ">
            <div className="w-full max-w-[450px] sm:max-w-[350px] px-5 py-6 ">
              <div className=" flex flex-col gap-10  ">
                <Form
                  className=" max-w-[400px]"
                  validationBehavior="aria"
                  onSubmit={handlesumbit}
                >
                  <Input
                    onChange={(e) => setFullName(e.target.value)}
                    label="Full name"
                    type="text"
                    className="text-xl"
                    variant="underlined"
                    color={nameError == "" ? `secondary` : `danger`}
                    classNames={{
                      label: "text-gray-700 font-medium text-sm",
                    }}
                  />
                  {nameError && (
                    <p className="text-red-500 text-xs">{nameError}</p>
                  )}

                  <Input
                    label="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    errorMessage="Please enter a valid email address."
                    isRequired
                    className="text-xl"
                    variant="underlined"
                    color="secondary"
                    classNames={{
                      label: "text-gray-700 font-medium text-sm",
                    }}
                  />
                  <Input
                    className="w-full"
                    isRequired
                    onChange={(e) => setPassward(e.target.value)}
                    classNames={{
                      label: "text-gray-700 font-medium text-sm",
                    }}
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-solid outline-transparent"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <PiEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <TbEyeFilled className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    label="Create password"
                    color="secondary"
                    type={isVisible ? "text" : "password"}
                    variant="underlined"
                  />
                  <Input
                    className="w-full"
                    isRequired
                    classNames={{
                      label: "text-gray-700 font-medium text-sm",
                    }}
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-solid outline-transparent"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <PiEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <TbEyeFilled className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    label="Conform password"
                    color="secondary"
                    type={isVisible ? "text" : "password"}
                    variant="underlined"
                  />

                  <Button
                    className="w-full mt-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold border-0"
                    type="submit"
                    variant="bordered"
                  >
                    Create Account
                  </Button>
                </Form>
              </div>
              <div className="flex flex-col mt-10 relative space-y-4 ">
                <hr className="text-gray-500"></hr>
                <div className=" flex justify-center items-center ">
                  <p className="text-xs">Already have an account? </p>
                  <Link as={NextLink} href="/login">
                    <div className="hover:transition-transform hover:scale-105 hover:duration-300 flex ">
                      <p className="text-purple-500 hover:underline ml-1 cursor-pointer text-xs ">
                        Sign in
                      </p>
                      <button className="  flex justify-center items-center pt-1 ml-0.5  cursor-pointer">
                        <FaGreaterThan size={8} className="text-purple-500" />
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-3 sm:pt-4 md:pt-8 lg:pt-11 hidden  sm:flex bg-white sm:flex-col justify-between rounded-md">
            <h1 className="text-4xl font-semibold text-zinc-700 px-7 ">
              {" "}
              Create Account
            </h1>
            <p className="sm:text-md md:text-lg lg:text-xl font-normal text-zinc-600 px-7 ">
              Sign up with your Email account to get started
            </p>
            <Image
              src={Loginimage}
              className=" w-full stick bottom-0 sm:mt-8 md:mt-0"
              alt="login avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
