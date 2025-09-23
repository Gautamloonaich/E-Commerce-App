"use client";
import Image from "next/image";
import image from "../../../public/contactImage.png";
import { Button } from "@heroui/react";
import { GoMail } from "react-icons/go";
import { IoMdCall } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { useState } from "react";
import Footer from "@/components/footer/footer";

export default function Contact() {
  let [contact, setcontact] = useState({
    name: "",
    email: "",
    description: "",
  });
  function handlecontactdetails(e) {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  }
  function handleSumbit(e) {
    e.preventDefault();
    console.log(contact);
    setcontact({
      name: "",
      email: "",
      description: "",
    });
  }

  return (
    <>
      <div className=" flex justify-center items-center  mt-[72px]  px-4 xs:px-8  sm:px-6 md:px-16 lg:px-18 xl:px-27 py-8">
        <div className="max-w-5xl w-full h-full   ">
          <div className="flex flex-col gap-2 ">
            <h1 className="font-medium text-2xl sm:text-3xl text-neutral-600">
              CONTACT US
            </h1>
            <p className="text:md md:text-lg text-neutral-400  ">
              LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
              WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU
              CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY
              PHONE, EMAIL, OR SOCIAL MEDIA.{" "}
            </p>
          </div>
          <div className="mt-5 ">
            <div className="flex flex-col sm:grid sm:grid-cols-2 ">
              <div className=" flex flex-col gap-3 items-center item-center py-8 px-0 sm:px-2 md:px-3 lg:px-5">
                <div className="flex justify-center w-full gap-8 ">
                  <Button
                    className="w-full bg-purple-500 rounded-md h-9 text-white"
                    startContent={<GoMail />}
                  >
                    VIA EMAIL{" "}
                  </Button>
                  <Button
                    className="w-full bg-purple-500 text-white rounded-md h-9"
                    startContent={<IoMdCall />}
                  >
                    VIA CALL
                  </Button>
                </div>
                <div className=" w-full max-w-full">
                  <Button
                    color="secondary"
                    variant="ghost"
                    className="w-full text-neutral-500 rounded-md hover:text-neutral-700 "
                    startContent={<IoChatboxEllipses />}
                  >
                    VIA SUPPORT CHAT
                  </Button>
                </div>
                <div className="w-full  mt-8 px-1.5 sm:px-3 ">
                  <form onSubmit={handleSumbit} className="flex flex-col gap-5">
                    <div className="w-full relative">
                      <input
                        type="text"
                        name="name"
                        value={contact.name}
                        className="w-full border-neutral-300 focus:outline-purple-400 rounded-sm h-10 sm:h-12 py-2 border"
                        onChange={handlecontactdetails}
                      />
                      <p className="text-sm sm:text-md  font-medium text-neutral-800   absolute px-2 bg-white left-4 top-[-11px] sm:top-[-12px]">
                        Name
                      </p>
                    </div>
                    <div className="w-full relative">
                      <input
                        type="text"
                        name="email"
                        value={contact.email}
                        className="w-full border-neutral-300  focus:outline-purple-400 rounded-sm h-10 sm:h-12 py-2 border"
                        onChange={handlecontactdetails}
                      />
                      <p className="text-xs sm:text-medium  font-medium text-neutral-800  px-2 absolute bg-white left-4 top-[-8px] sm:top-[-13px]">
                        E-Mail
                      </p>
                    </div>
                    <div className="w-full relative">
                      <textarea
                        rows={5}
                        name="description"
                        type="text"
                        value={contact.description}
                        className="w-full border-neutral-300  focus:outline-purple-400 rounded-sm   py-2.5 px-3 border"
                        onChange={handlecontactdetails}
                      />
                      <p className="text-sm sm:text-md  font-medium text-neutral-800 absolute  px-2 bg-white left-4 top-[-11px] sm:top-[-11px]">
                        Text
                      </p>
                    </div>
                    <div className="flex justify-end items-end w-full ">
                      <Button
                        className="bg-indigo-500 text-white w-40 font-semibold"
                        type="submit"
                      >
                        Sumbit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="  sm:flex sm:items-end pb-10 hidden">
                <Image src={image} className="" alt="contact avator image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" mx-auto mt-10 px-4 sm:px-6 border-t-1 border-t-neutral-300 lg:px-8 py-8 sticked w-full bottom-0  ">
        <p className="text-center text-xs sm:text-sm text-neutral-600 ">
          © 2025 Profile Manager. All rights reserved.
        </p>
      </div> */}
      <Footer/>
    </>
  );
}
