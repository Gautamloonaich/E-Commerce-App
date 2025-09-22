"use client";
import { Form, Input, Button, input } from "@heroui/react";
import { TbEyeFilled } from "react-icons/tb";
import { PiEyeSlashFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loginimage from "../../../public/loginImage04.jpg";
import NavbarLogin from "./navbar";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  let [error, setError] = useState({});
  let [isSubmitted, setIsSubmitted] = useState(false);
  let [inputData, setInputData] = useState({
    email: "",
    passward: "",
  });
  function handleInputs(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    let fieldError = validatefild(e.target.name, e.target.value);

    console.log(fieldError);

    if (fieldError) {
      setError({ ...error, [e.target.name]: fieldError });
    } else {
      let newerror = { ...error };
      delete newerror[e.target.name];
      setError(newerror);
    }
  }

  function validatefild(name, value) {
    if (name == "email") {
      if (inputData.email === "") {
        return "Email is required !";
      } else if (validateEmail(value) === false) {
        return "invalid Email !";
      }
    }
    if (name == "passward") {
      if (inputData.passward === "") {
        return "Passward is required !";
      } else if (validatePassward(value) === false) {
        return "Strong passward is required ! ";
      }
    }
    return "";
  }
  //check Regex of email
  function validateEmail(email) {
    let emailRegex = /^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  //check Regex of Passward
  function validatePassward(pass) {
    let passwardRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwardRegex.test(pass);
  }
  // Handle error means apply validation Condition
  function validateForm() {
    let err = {};
    //for Email apply condition

    if (inputData.email === "") {
      err.email = "Email is required !";
    } else if (validateEmail(inputData.email) === false) {
      err.email = "invalid Email !";
    }

    //for Passward apply condition
    if (inputData.passward === "") {
      err.passward = "Passward is required !";
    } else if (validatePassward(inputData.passward) === false) {
      err.passward = "Strong passward is required ! ";
    }

    return err;
  }
  // handle sumbit button
  function Submit(e) {
    e.preventDefault();
    let handleError= validateForm()
    setError(handleError);
    Object.keys(error).length === 0
      ? setIsSubmitted(true)
      : setIsSubmitted(false);
  }

  //

  console.log(error);
  // check condition when form id successfully alidate then send data to backend by Sumbit button
  useEffect(() => {
    if (isSubmitted && Object.keys(error).length === 0) {
      console.log(inputData);
      setIsSubmitted(false);
      setInputData({ email: "", passward: "" });
    }
  }, [error, isSubmitted]);

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
                    name="email"
                    type="email"
                    value={inputData.email}
                    isRequired
                    className="text-xl"
                    variant="underlined"
                    color={"email" in error ? `danger` : `secondary`}
                    classNames={{
                      label: "text-gray-700 font-medium text-sm",
                      inputWrapper: "focus-within:animate-blink  ",
                    }}
                    onChange={(e) => handleInputs(e)}
                  />
                  {error && (
                    <p className="text-red-500  text-xs ">{error.email}</p>
                  )}
                  <Input
                    className="w-full"
                    isRequired
                    value={inputData.passward}
                    name="passward"
                    classNames={{
                      label: "text-gray-700 font-medium text-sm ",
                      inputWrapper: "focus-within:animate-blink  ",
                    }}
                    onChange={(e) => handleInputs(e)}
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-solid outline-transparent "
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
                    color={"passward" in error ? `danger` : `secondary`}
                    type={isVisible ? "text" : "password"}
                    variant="underlined"
                  />
                  {error && (
                    <p className="text-red-500 text-xs ">{error.passward}</p>
                  )}
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
                <p className="text-center text-xs absolute top-[-8px] bg-purple-100  left-[28%] right-[28%]">
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
            <h1 className="text-4xl font-semibold text-zinc-700 px-7 animate-bounce ">
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
