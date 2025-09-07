"use client";
import { Form, Input, Button } from "@heroui/react";
import { TbEyeFilled } from "react-icons/tb";
import { PiEyeSlashFill } from "react-icons/pi";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loginimage from "../../../public/loginImage04.jpg";
import NavbarLogin from "./navbar";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const Submit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      <NavbarLogin />
      <div className="w-full h-screen flex flex-col justify-center items-center px-4 xs:px-8  sm:px-6 md:px-16 lg:px-18 xl:px-27 ">
        <h1 className=" text-3xl  w-full font-semibold text-zinc-700 flex  justify-center items-center sm:hidden  mt-5">
          LOGIN
        </h1>
        <div className="max-w-4xl  w-full grid flex-col sm:grid-cols-2 rounded-md sm:rounded-0 mt-10 sm:mt-0 sm:py-0 bg-indigo-50 bg-gradient-to-b from-indigo-100 to-purple-100 ring-2 ring-indigo-300   ">
          <div className="flex justify-center flex-col items-center ">
            <div className="w-full max-w-[450px] sm:max-w-[350px] px-5 py-6 ">
              <div className=" flex flex-col gap-10  ">
                <Form
                  className=" max-w-[400px]"
                  validationBehavior="aria"
                  onSubmit={Submit}
                >
                  <Input
                    label="Email"
                    type="email"
                    isRequired
                    className="text-xl"
                    variant="underlined"
                    color="secondary"
                    classNames={{
                      label: "text-gray-700 font-medium text-sm",
                    }}
                    onChange={Submit}
                  />
                  <Input
                    className="w-full"
                    isRequired
                    classNames={{
                      label: "text-gray-700 font-medium text-sm",
                    }}
                    onChange={Submit}
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
                    label="Password"
                    color="secondary"
                    type={isVisible ? "text" : "password"}
                    variant="underlined"
                  />
                  <Link
                    href="#"
                    className="text-xs mt-2 text-indigo-500 underline"
                  >
                    Forget Password ?
                  </Link>
                  <Button
                    className="w-full mt-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold border-0"
                    type="submit"
                    variant="bordered"
                  >
                    Login
                  </Button>
                </Form>
              </div>
              <div className="flex flex-col mt-18 relative space-y-4 ">
                <p className="text-center text-xs absolute top-[-8px] bg-purple-100 px-3 left-25">
                  New to ShopHub
                </p>
                <hr className="text-gray-500"></hr>
                <Button
                  className="w-full mt-5 bg-gradient-to-r text-purple-600 font-bold border "
                  as={Link}
                  href="/signin"
                  type="submit"
                  variant="bordered"
                >
                  Create New Account
                </Button>
              </div>
            </div>
          </div>
          <div className=" gap-3 sm:pt-4 md:pt-8 lg:pt-11 hidden  sm:flex bg-white sm:flex-col justify-between rounded-md">
            <h1 className="text-4xl font-semibold text-zinc-700 px-7 ">
              {" "}
              LOGIN
            </h1>
            <p className="sm:text-md md:text-lg lg:text-xl font-normal text-zinc-600 px-7 ">
              Get access to your Orders, Wishlist and Recommendations
            </p>
            <Image
              src={Loginimage}
              className=" w-full stick bottom-0 sm:mt-8 md:mt-0"
              alt="login avatar"
            />
          </div>
        </div>
      </div>
    </>
  );
}
