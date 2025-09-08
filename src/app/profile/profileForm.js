"use client";
import { Button, Input, Textarea } from "@heroui/react";
import { Switch } from "@heroui/react";
import { IoCamera } from "react-icons/io5";

import pic from "../../../public/person-01.svg";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { FaSortDown } from "react-icons/fa";
export default function PersonalInformation() {
  let [image, setimage] = useState();

  let inputFilds = [
    {
      lable: "First Name",
      labelPlacement: "outside-top",
      placeholder: "Enter First Name",
      type: "text",
    },
    {
      lable: "Last Name",
      labelPlacement: "outside-top",
      placeholder: "Enter Last Name",
      type: "text",
    },
    {
      lable: "Email Address",
      labelPlacement: "outside-top",
      placeholder: "gautam.loo@example.com",
      type: "email",
    },
    {
      lable: "Phone Address",
      labelPlacement: "outside-top",
      placeholder: "+(91)0123-456-789",
      type: "tel",
    },
    {
      lable: "Bio",
      labelPlacement: "outside-top",
      placeholder: "Enter about yourself",
      type: "textarea",
    },
    {
      lable: "Location",
      labelPlacement: "outside-top",
      placeholder: "Address",
      type: "text",
    },
    {
      lable: "Website",
      labelPlacement: "outside-top",
      placeholder: "https://johndoe.com",
      type: "url",
    },
    {
      labelPlacement: "outside-top",
      placeholder: "Upload",
      type: "file",
    },
  ];
  return (
    <>
      <div className=" border border-neutral-200 rounded-lg">
        <div className="px-4 py-6 sm:px-6 text-lg font-medium border-b border-neutral-200">
          Personal Information
        </div>
        <div className="px-3 py-6  overflow-hidden sm:px-6">
          <div className="flex gap-5 mb-7 ">
            <div className="relative shrink-0">
              <label htmlFor="profileimage">
                <Image
                  src={image ? URL.createObjectURL(image) : pic}
                  width={100}
                  alt="thumb nail"
                  height={100}
                  className={
                    image
                      ? `w-[80px] sm:w-[110px] cursor-pointer ring-4 ring-indigo-300 h-[80px] sm:h-[110px] shrink-0 object-cover rounded-full`
                      : `ring-4 ring-neutral-300 w-[80px] sm:w-[110px] cursor-pointer  h-[80px] sm:h-[110px] shrink-0 object-cover rounded-full`
                  }
                />
              </label>
              <div className="absolute bottom-4 sm:bottom-0 right-0 sm:right-1">
                <IoCamera size={25} className="size-[20px] sm:size-[25px]" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 pl-2.5 mb-0 sm:mb-3">
                <h1 className=" text-neutral-900 text-sm sm:text-md  font-medium">
                  Profile Photo
                </h1>
                <p className="text-xs sm:text-sm text-neutral-600">
                  JPG, GIF or PNG.{" "}
                </p>
              </div>
              <div className="flex justify-start items-start gap-2">
                {inputFilds.slice(7, 8).map((items, key) => {
                  return (
                    <div key={key}>
                      <input
                        id="profileimage"
                        type="file"
                        onChange={(e) => setimage(e.target.files[0])}
                        className="border hidden"
                      />
                    </div>
                  );
                })}
                <div className="flex gap-2.5 sm:gap-3">
                  <label
                    htmlFor="profileimage"
                    className="border-2 bg-purple-400 hover:bg-purple-600 hover:border-purple-600 text-white border-purple-400 px-2 h-9 text-xs sm:text-sm sm:px-5 py-0 sm:py-1 rounded-xl flex justify-center items-center"
                  >
                    Upload
                  </label>
                  <Button
                    color="default"
                    variant="bordered"
                    className="px-0 text-xs min-w-15 h-9 text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 "
                    onClick={() => setimage()}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-6">
            {inputFilds.slice(0, 2).map((items, key) => {
              return (
                <div key={key} className="w-full">
                  {" "}
                  <Input
                    label={items.lable}
                    labelPlacement={items.labelPlacement}
                    placeholder={items.placeholder}
                    variant="faded"
                    type={items.type}
                    classNames={{
                      input: "h-[35px] sm:h-[48px] text-sm sm:text-md",
                      inputWrapper:
                        "h-[35px] sm:h-[48px] px-1.5 rounded-lg rounded-xl",
                      label: "font-medium sm:font-semibold pl-1",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex flex-col gap-5">
            {inputFilds.slice(2, 4).map((items, key) => {
              return (
                <div key={key}>
                  {" "}
                  <Input
                    label={items.lable}
                    labelPlacement={items.labelPlacement}
                    placeholder={items.placeholder}
                    variant="faded"
                    type={items.type}
                    classNames={{
                      input: "h-[35px] sm:h-[45px] text-sm sm:text-md",
                      inputWrapper:
                        "h-[35px] sm:h-[45px] px-1.5 rounded-lg rounded-xl",
                      label: "font-medium sm:font-semibold pl-1",
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col ">
            {inputFilds.slice(4, 5).map((items, key) => {
              return (
                <div key={key}>
                  {" "}
                  <Textarea
                    label={items.lable}
                    isClearable
                    labelPlacement={items.labelPlacement}
                    placeholder={items.placeholder}
                    variant="faded"
                    type={items.type}
                    minRows={6}
                    maxRows={20}
                    classNames={{
                      input: "min-h-[45px] text-md",
                      inputWrapper:
                        "min-h-[45px] px-3 py-3 rounded-lg rounded-xl",
                      label: "font-semibold pl-1",
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-5 mt-6">
            {inputFilds.slice(5, 7).map((items, key) => {
              return (
                <div key={key} className="w-full">
                  {" "}
                  <Input
                    label={items.lable}
                    labelPlacement={items.labelPlacement}
                    placeholder={items.placeholder}
                    variant="faded"
                    type={items.type}
                    classNames={{
                      input: "h-[35px] sm:h-[45px] text-sm sm:text-md ",
                      inputWrapper:
                        "h-[35px] sm:h-[45px] px-1.5 rounded-lg rounded-xl",
                      label: " font-medium sm:font-semibold pl-1",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export function AccountSettings() {
  let [selector, setselector] = useState("Select");
  console.log(selector);
  return (
    <>
      <div className=" border border-neutral-200 rounded-lg">
        <div className="px-3.5 py-6 sm:p-6 text-lg font-medium border-b border-neutral-200">
          Account Settings
        </div>
        <div className="px-3 py-6  sm:px-6 flex flex-col gap-6">
          <div className="flex  items-start  justify-between gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-sm sm:text-sm font-medium text-neutral-900">
                Email Notifications
              </h1>
              <p className="text-xs sm:text-sm text-neutral-600">
                Receive email updates about your account activity
              </p>
            </div>
            <div className="flex justify-end pt-1 items-start">
              <Switch
                defaultSelected
                aria-label="Automatic updates"
                color="secondary"
                size="sm"
              />
            </div>
          </div>
          <div className="flex items-start justify-between gap-7 ">
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-medium text-neutral-900">
                Two-Factor Authentication
              </h1>
              <p className="text-xs sm:text-sm text-neutral-600">
                Add an extra layer of security to your account
              </p>
            </div>
            <div>
              <Button size="sm" color="secondary" variant="solid">
                Set up
              </Button>
            </div>
          </div>
          <div className="flex items-start justify-between gap-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-medium text-neutral-900">
                Profile Visibility
              </h1>
              <p className="text-xs sm:text-sm text-neutral-600">
                Control who can see your profile information
              </p>
            </div>

            <div>
              <Dropdown backdrop="blur">
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                    color="secondary"
                    className="min-w-22 sm:min-w-25  flex items-center justify-between"
                    endContent={<FaSortDown />}
                  >
                    {selector}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Static Actions"
                  variant="faded"
                  color="secondary"
                >
                  <DropdownItem
                    key="new"
                    value="Public"
                    onClick={() => setselector("Public")}
                  >
                    Public
                  </DropdownItem>
                  <DropdownItem
                    key="copy"
                    value="Private"
                    onClick={() => setselector("Private")}
                  >
                    Private
                  </DropdownItem>
                  <DropdownItem
                    key="edit"
                    value="Friend only"
                    onClick={() => setselector("Friend only")}
                  >
                    Friend only
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center mt-5">
        <div className="flex gap-5">
          <Button
            variant="ghost"
            className="min-w-20 py-4 sm:min-w-30 sm:py-5.5 font-semibold  "
          >
            Cancle
          </Button>
          <Button
            color="secondary"
            className="min-w-30 py-4 sm:min-w-40 sm:py-5.5 font-semibold bg-gradient-to-r from-purple-500  to-indigo-500"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </>
  );
}
