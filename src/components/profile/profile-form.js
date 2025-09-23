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
import React, { useEffect, useMemo, useState } from "react";
import { FaSortDown } from "react-icons/fa";
export default function ProfileForm() {
  let [image, setimage] = useState();

  let inputFilds = [
    {
      dir: "horizantal",
      fields: [
        {
          name: "firstName",
          lable: "First Name",
          labelPlacement: "outside-top",
          placeholder: "Enter First Name",
          type: "text",
        },
        {
          name: "lastName",
          lable: "Last Name",
          labelPlacement: "outside-top",
          placeholder: "Enter Last Name",
          type: "text",
        },
      ],
    },
    {
      dir: "verticle",
      fields: [
        {
          name: "email",
          lable: "Email Address",
          labelPlacement: "outside-top",
          placeholder: "gautam.loo@example.com",
          type: "email",
        },
        {
          name: "phoneNo",
          lable: "Phone Address",
          labelPlacement: "outside-top",
          placeholder: "+(91)0123-456-789",
          type: "tel",
        },
        {
          name: "bio",
          lable: "Bio",
          labelPlacement: "outside-top",
          placeholder: "Enter about yourself",
          type: "textarea",
        },
      ],
    },
    {
      dir: "horizantal",
      fields: [
        {
          name: "website",
          lable: "Website",
          labelPlacement: "outside-top",
          placeholder: "https://johndoe.com",
          type: "url",
        },
        {
          name: "location",
          lable: "Location",
          labelPlacement: "outside-top",
          placeholder: "Location",
          type: "text",
        },
      ],
    },
  ];

  function handleImageProfile(e) {
    if (e.target.files[0]) {
      if (e.target.files[0].type.startsWith("image/")) {
        setimage(e.target.files[0]); // show preview
      } else {
        alert("Only image files are allowed (JPG, PNG, GIF).");
      }
    }
  }
  let [details, setDetails] = useState({
    firstName: "Gautam",
    lastName: "",
    email: "Gautamloonaich5822@gmail.com",
    phoneNo: "",
    bio: " ",
    website: "",
    location: "",
    notification: true,
    profilevisiblity: "public",
  });

  let [Error, setError] = useState({});
  let [isSumbiting, setISSumbiting] = useState(false);
  function handleSwitch(mess) {
    setDetails({ ...details, notification: mess });
  }

  function handleProfileVisiblity(key) {
    setDetails({ ...details, profilevisiblity: key });
  }
  function handleinput(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
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
    if (name === "firstName") {
      if (value == "") {
        return "firstName is required !";
      } else if (value.length < 3) {
        return "Invalid firstName !";
      }
    }

    if (name === "email") {
      if (value === "") {
        return "Email is required !";
      } else if (validateEmail(value) == false) {
        return " Invalid Email !";
      }
    }

    if (name === "phoneNo") {
      if (value === "") {
        return " phoneNo is required !";
      } else if (validatePhoneNo(value) == false) {
        return " Invalid Phoneno. !";
      }
    }

    return null;
  }

  console.log("Error:", Error);

  function validateEmail(email) {
    let emailRegex = /^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  function validatePhoneNo(number) {
    let PhonenoRegex = /^\+?[0-9()\-\s]{10,20}$/;
    return PhonenoRegex.test(number);
  }

  function handleError() {
    let err = {};
    if (details.firstName === "") {
      err.firstName = "firstName is required !";
    } else if (details.firstName.length < 3) {
      err.firstName = "Invalid Name !";
    }

    if (details.email === "") {
      err.email = "Email is required !";
    } else if (validateEmail(details.email) == false) {
      err.email = " Invalid Email !";
    }

    if (details.phoneNo === "") {
      err.phoneNo = " phoneNo is required !";
    } else if (validatePhoneNo(details.phoneNo) == false) {
      err.phoneNo = " Invalide phoneNo!";
    }

    return err;
  }

  function handlesumbit(e) {
    e.preventDefault();
    const validationErrors = handleError();
    setError(validationErrors); // is update first other wise on first click details is not visible
    {
      Object.keys(Error).length === 0
        ? setISSumbiting(true)
        : setISSumbiting(false);
    }
  }
  useEffect(() => {
    if (isSumbiting && Object.keys(Error).length === 0) {
      console.log("inpurt details:", details);

      setISSumbiting(false);
    }
  }, [Error, isSumbiting]);

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
                      ? `w-[80px] p-1 sm:w-[110px] cursor-pointer ring-2 ring-purple-300 h-[80px] sm:h-[110px] shrink-0 object-cover rounded-full`
                      : `ring-2 p-1 hover:ring-purple-300 ring-neutral-300 w-[80px] sm:w-[110px] cursor-pointer  h-[80px] sm:h-[110px] shrink-0 object-cover rounded-full`
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
                <input
                  id="profileimage"
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImageProfile(e)}
                  className="border hidden"
                />
                <div className="flex gap-2.5 sm:gap-3">
                  <label
                    htmlFor="profileimage"
                    className="border-2 bg-purple-400 hover:bg-purple-600 hover:border-purple-600 text-white border-purple-400 px-2 h-9 text-xs sm:text-sm sm:px-5 py-0 sm:py-1 rounded-xl flex justify-center transform transition-transform duration-300 ease-in-out 
             active:scale-95 items-center"
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
          <div>
            {inputFilds.map((item, key) => {
              return (
                <div key={key}>
                  {" "}
                  {item.dir == "horizantal" ? (
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-6">
                      {item.fields.map((items, key) => {
                        return (
                          <div key={key} className="w-full">
                            {" "}
                            <Input
                              label={items.lable}
                              name={items.name}
                              labelPlacement={items.labelPlacement}
                              placeholder={items.placeholder}
                              variant="faded"
                              value={details[items.name]}
                              onChange={(e) => handleinput(e)}
                              type={items.type}
                              classNames={{
                                input:
                                  "h-[45px] sm:h-[48px] text-sm sm:text-md",
                                inputWrapper:
                                  "h-[45px] sm:h-[48px] px-1.5  rounded-full  bg-neutral-50 focus-within:shadow-lg shadow-[-5px_5px_8px_rgb(229,229,229)] focus-within:shadow-neutral-100 focus-within:border-neu-500  hover:border-neutral-500  focus-within:animate-fade-out focus-within:duration-3000 focus-within:bg-white",
                                label: "font-medium sm:font-semibold pl-2",
                              }}
                            />
                            {Error &&
                              (items.name == "firstName" ? (
                                <p className="text-red-500  pl-3 mt-2 text-xs ">
                                  {Error.firstName}
                                </p>
                              ) : null)}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="mt-6 flex flex-col mb-6 gap-5">
                      {item.fields.map((items, key) => {
                        return (
                          <div key={key}>
                            {" "}
                            {items.type != "textarea" ? (
                              <div>
                                {" "}
                                <Input
                                  name={items.name}
                                  label={items.lable}
                                  value={details[items.name]}
                                  labelPlacement={items.labelPlacement}
                                  placeholder={items.placeholder}
                                  variant="faded"
                                  type={items.type}
                                  onChange={(e) => handleinput(e)}
                                  classNames={{
                                    input:
                                      "h-[45px] sm:h-[45px] text-sm sm:text-md",
                                    inputWrapper:
                                      "h-[45px] sm:h-[48px] px-1.5  rounded-full  bg-neutral-50 focus-within:shadow-lg shadow-[-5px_5px_8px_rgb(229,229,229)] focus-within:shadow-neutral-200     focus-within:animate-fade-out focus-within:duration-3000 focus-within:bg-white",
                                    label: "font-medium sm:font-semibold pl-2",
                                  }}
                                />
                                {Error[items.name] && (
                                  <p className="text-red-500 pl-3 mt-2 text-xs">
                                    {Error[items.name]}
                                  </p>
                                )}{" "}
                              </div>
                            ) : (
                              <Textarea
                                label={items.lable}
                                name={items.name}
                                isClearable
                                labelPlacement={items.labelPlacement}
                                onChange={(e) => handleinput(e)}
                                value={details[items.name]}
                                placeholder={items.placeholder}
                                variant="faded"
                                type={items.type}
                                minRows={6}
                                maxRows={20}
                                classNames={{
                                  input: "min-h-[45px] text-md",
                                  inputWrapper:
                                    "min-h-[45px] px-3 py-3 rounded-lg rounded-2xl bg-neutral-50 focus-within:shadow-lg shadow-[-5px_5px_8px_rgb(229,229,229)]  focus-within:shadow-neutral-100 focus-within:border-neu-500  hover:border-neutral-500  focus-within:animate-fade-out focus-within:duration-3000 focus-within:bg-white",
                                  label: "font-semibold pl-1",
                                }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" border border-neutral-200 mt-10 rounded-lg">
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
                onValueChange={(isSelected) => {
                  handleSwitch(isSelected);
                }}
                name="notification"
                aria-label="Automatic updates"
                color="secondary"
                size="sm"
                isSelected={details.notification}
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
                    {details.profilevisiblity == ""
                      ? "Select"
                      : details.profilevisiblity}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Static Actions"
                  variant="faded"
                  color="secondary"
                  value={details.profilevisiblity}
                  onAction={(key) => {
                    handleProfileVisiblity(key);
                  }}
                >
                  <DropdownItem key="Public">Public</DropdownItem>
                  <DropdownItem key="Private">Private</DropdownItem>
                  <DropdownItem key="Friend only">Friend only</DropdownItem>
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
            className="min-w-20 py-4 sm:min-w-30 sm:py-5.5 font-semibold transform transition-transform duration-300 ease-in-out 
             active:scale-95 "
          >
            Cancle
          </Button>
          <Button
            color="secondary"
            className="min-w-30 py-4 sm:min-w-40 sm:py-5.5 font-semibold bg-gradient-to-r from-purple-500  to-indigo-500  transform transition-transform duration-200 ease-in-out 
             active:scale-90 "
            onClick={handlesumbit}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </>
  );
}
