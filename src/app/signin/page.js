"use client";
import { Form, Input, Button } from "@heroui/react";
import { TbEyeFilled } from "react-icons/tb";
import { PiEyeSlashFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loginimage from "../../../public/loginImage04.jpg";
import { FaGreaterThan } from "react-icons/fa";
import { NextLink } from "next/link";
import PublicHeader from "@/components/header/PublicHeader";

export default function Signin() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [Error, setError] = useState({});
  let [isSumbiting, setISSumbiting] = useState(false);
  let [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    password: "",
    conformPassword: "",
  });
  function handleInputFild(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    let fieldError = validateInputs(e.target.name, e.target.value);
    if (fieldError) {
      setError({ ...Error, [e.target.name]: fieldError });
    } else {
      let newError = { ...Error };
      delete newError[e.target.name];
      setError(newError);
    }
  }
  function validateInputs(name, value) {
    if (name === "fullName") {
      if (value == "") {
        return "fullName is required !";
      } else if (value.length < 3) {
        return "Invalid Name !";
      }
    }
    if (name === "email") {
      if (value === "") {
        return "Email is required !";
      } else if (validateEmail(value) == false) {
        return " Invalid Email !";
      }
    }

    if (name === "password") {
      if (value === "") {
        return " Password is required !";
      } else if (validatepassword(value) == false) {
        return " Strong password is required !";
      }
    }

    if (name === "conformPassword") {
      if (value === "") {
        return "password conformation is required !";
      } else if (inputData.password != value) {
        return " password not match!";
      }
    }
    return null;
  }

  console.log("Error:", Error);

  function validateEmail(email) {
    let emailRegex = /^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  function validatepassword(pass) {
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(pass);
  }

  function handleError() {
    let err = {};
    if (inputData.fullName === "") {
      err.fullName = "fullName is required !";
    } else if (inputData.fullName.length < 3) {
      err.fullName = "Invalid Name !";
    }

    if (inputData.email === "") {
      err.email = "Email is required !";
    } else if (validateEmail(inputData.email) == false) {
      err.email = " Invalid Email !";
    }

    if (inputData.password === "") {
      err.password = " Password is required !";
    } else if (validatepassword(inputData.password) == false) {
      err.password = " Strong password is required !";
    }

    if (inputData.conformPassword === "") {
      err.conformPassword = "password conformation is required !";
    } else if (inputData.password != inputData.conformPassword) {
      err.conformPassword = " password not match!";
    }

    return err;
  }
  function handlesumbit(e) {
    e.preventDefault();
    const validationErrors = handleError();
    setError(validationErrors); // is update first other wise on first click inputdata is not visible
    {
      Object.keys(Error).length === 0
        ? setISSumbiting(true)
        : setISSumbiting(false);
    }
    console.log("create account");
  }
  useEffect(() => {
    if (isSumbiting && Object.keys(Error).length === 0) {
      console.log("input:", inputData);
      setInputData({
        fullName: "",
        email: "",
        password: "",
        conformPassword: "",
      });
      setISSumbiting(false);
    }
  }, [Error, isSumbiting]);
  return (
    <div className="h-full w-full">
      <PublicHeader />
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
                    onChange={(e) => handleInputFild(e)}
                    label="Full name"
                    type="text"
                    name="fullName"
                    className="text-xl"
                    variant="underlined"
                    value={inputData.fullName}
                    color={"fullName" in Error ? `danger` : `secondary`}
                    classNames={{
                      label: "text-gray-700 font-medium text-sm",
                    }}
                  />
                  {Error && (
                    <p className="text-red-500  text-xs ">{Error.fullName}</p>
                  )}

                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={inputData.email}
                    onChange={(e) => handleInputFild(e)}
                    errorMessage="Please enter a valid email address."
                    isRequired
                    className="text-xl"
                    variant="underlined"
                    color={"email" in Error ? `danger` : `secondary`}
                    classNames={{
                      label: "text-gray-700 font-medium text-sm",
                    }}
                  />
                  {Error && (
                    <p className="text-red-500  text-xs ">{Error.email}</p>
                  )}

                  <Input
                    className="w-full"
                    name="password"
                    value={inputData.password}
                    isRequired
                    onChange={(e) => handleInputFild(e)}
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
                    color={"password" in Error ? `danger` : `secondary`}
                    type={isVisible ? "text" : "password"}
                    variant="underlined"
                  />
                  {Error && (
                    <p className="text-red-500  text-xs ">{Error.password}</p>
                  )}

                  <Input
                    className="w-full"
                    isRequired
                    name="conformPassword"
                    value={inputData.conformPassword}
                    onChange={(e) => handleInputFild(e)}
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
                    color={"conformPassword" in Error ? `danger` : `secondary`}
                    type={isVisible ? "text" : "password"}
                    variant="underlined"
                  />
                  {Error && (
                    <p className="text-red-500  text-xs ">
                      {Error.conformPassword}
                    </p>
                  )}

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
