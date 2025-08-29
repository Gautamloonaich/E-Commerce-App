import Image from "next/image";
import AboutFooter from "./aboutfooter";
import image from "../../../public/companyimage.jpg";
import { FaLightbulb } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import person1 from "../../../public/person-01.svg";
import person2 from "../../../public/person-02.svg";
import person3 from "../../../public/person-03.svg";
import person4 from "../../../public/person-04.svg";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa6";

export default function aboutPage() {
  return (
    <>
      <div className="py-[80px] flex item-center bg-neutral-50  h-[400px]    justify-center ">
        <div className=" text-center   px-4 sm:px-6 m-auto">
          <h1 className="text-4xl  font-semibold md:text-6xl text-neutral-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-center font-normal text-neutral-600  flex max-w-180">
            We're passionate about creating innovative solutions that make a
            difference in people's lives.
          </p>
        </div>
      </div>

      <div>
        <div className="py-16 flex justify-center">
          <div className="   gap-5 px-4 max-w-7xl  sm:px-6 lg:px-8 grid items-center md:grid-cols-2  ">
            <div className="w-full">
              <h1 className="text-3xl text-neutral-900 mb-6 font-bold">
                Our Story
              </h1>
              <p className="text-neutral-600 mb-4">
                Founded in 2020, we started with a simple mission: to bridge the
                gap between technology and human needs. What began as a small
                team of passionate innovators has grown into a company that
                serves thousands of customers worldwide.
              </p>
              <p className="text-neutral-600 mb-4">
                Our journey has been marked by continuous learning, adaptation,
                and an unwavering commitment to excellence. We believe that the
                best solutions come from understanding real problems and working
                tirelessly to solve them.
              </p>
              <p className="text-neutral-600 mb-4">
                Our journey has been marked by continuous learning, adaptation,
                and an unwavering commitment to excellence. We believe that the
                best solutions come from understanding real problems and working
                tirelessly to solve them.
              </p>
            </div>
            <Image
              alt="company image"
              src={image}
              className="h-80 max-w-full flex rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="py-16 bg-neutral-50 flex item-center justify-center">
        <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl ">
          <div className="mb-[48px]">
            <h1 className="text-[30px] text-center font-medium mb-4">
              Our Mission & Values
            </h1>
            <p className=" text-[16px] text-neutral-700 text-center max-w-[672px]">
              We're driven by core principles that guide every decision we make
              and every solution we create.
            </p>
          </div>
          <div className=" flex-col md:grid md:grid-cols-3 gap-8 space-y-8 md:space-y-0  ">
            <div className="p-6 flex flex-col  items-center border-2 rounded-xl max-w-full bg-white border-neutral-200">
              <div className="flex justify-center items-center  mb-4 w-16 h-16 rounded-full bg-[rgb(17,24,39)]">
                <FaLightbulb size={23} className="text-white" />
              </div>
              <h1 className="text-xl text-neutral-900 text-center font-medium mb-3">
                Innovation
              </h1>
              <p className="text-neutral-600 text-center">
                We constantly push the boundaries of what's possible, embracing
                new technologies and creative approaches.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center border rounded-xl max-w-full bg-white border-neutral-200">
              <div className="flex justify-center  items-center border-2 mb-4 w-16 h-16 rounded-full bg-[rgb(17,24,39)]">
                <IoPeopleSharp size={23} className="text-white" />
              </div>
              <h1 className="text-xl text-center text-neutral-900 font-medium mb-3">
                Collaboration
              </h1>
              <p className="text-neutral-600 text-center">
                We believe the best results come from working together, both
                within our team and with our clients.
              </p>
            </div>
            <div className="p-6 flex flex-col items-center border-2 rounded-xl max-w-full bg-white border-neutral-200">
              <div className="flex  justify-center items-center  border mb-4  w-16 h-16  rounded-full bg-[rgb(17,24,39)]">
                <FaStar size={23} className="text-white" />
              </div>
              <h1 className="text-xl text-center text-neutral-900 font-medium mb-3">
                Excellence
              </h1>
              <p className=" text-center text-neutral-600">
                We're committed to delivering the highest quality in everything
                we do, exceeding expectations every time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="py-16 flex-col  justify-center  items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-[30px] text-center font-medium mb-4">
            Meet Our Team
          </h1>
          <div className="flex items-center justify-center mb-12 ">
            <p className=" text-[16px] text-neutral-700 justify-center flex text-center max-w-[662px]">
              The passionate individuals behind our success, each bringing
              unique expertise and perspective.
            </p>
          </div>
          <div className=" flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 space-y-8 md-space-y-0">
            <div className="flex flex-col justify-center m-0 items-center  w-full">
              <Image alt="Avatar" width={130} src={person1} className="mb-4" />
              <h1 className="text-xl text-center text-neutral-900 font-normal">
                Sarah Johnson
              </h1>
              <p className="text-neutral-600 text-center">CEO & Founder</p>
              <div className="flex justify-center gap-2 mt-3 items-center">
                <RxLinkedinLogo
                  size={20}
                  className="text-neutral-500 hover:text-neutral-700"
                />
                <FaGithub
                  size={20}
                  className="text-neutral-500 hover:text-neutral-700"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center m-0 items-center  w-full">
              <Image alt="Avatar" width={130} src={person2} className="mb-4" />
              <h1 className="text-xl text-center text-neutral-900 font-normal">
                Michael Chen
              </h1>
              <p className="text-neutral-600 text-center">CTO</p>
              <div className="flex justify-center mt-3 gap-2 items-center">
                <RxLinkedinLogo
                  size={20}
                  className="text-neutral-500 hover:text-neutral-700"
                />
                <FaGithub
                  size={20}
                  className="text-neutral-500 hover:text-neutral-700"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center m-0 items-center  w-full">
              <Image alt="Avatar" width={130} src={person3} className="mb-4" />
              <h1 className="text-xl text-center text-neutral-900 font-normal">
                Emily Rodriguez
              </h1>
              <p className="text-neutral-600 text-center">Head of Design</p>
              <div className="flex justify-center mt-3 gap-2 items-center">
                <RxLinkedinLogo
                  size={20}
                  className="text-neutral-500 hover:text-neutral-700"
                />
                <FaGithub
                  size={20}
                  className="text-neutral-500 hover:text-neutral-700"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center m-0 items-center  w-full">
              <Image alt="Avatar" width={130} src={person4} className="mb-4" />
              <h1 className="text-xl text-center text-neutral-900 font-normal">
                David Kim
              </h1>
              <p className="text-neutral-600 text-center">Lead Developer</p>
              <div className="flex justify-center mt-3 gap-2 items-center">
                <RxLinkedinLogo
                  size={20}
                  className="text-neutral-500 hover:text-neutral-700"
                />
                <FaGithub
                  size={20}
                  className="text-neutral-500 hover:text-neutral-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-neutral-50 flex items-center justify-center">
        <div className=" flex flex-col md:grid md:grid-cols-4 w-full max-w-7xl gap-8 px-4 sm:px-6 lg:px-8 spacey-8 md:space-y-0">
          <div className="flex flex-col items-center justify-center  w-full">
            <h1 className="text-4xl text-neutral-900 mb-2">50+</h1>
            <p className="text-neutral-600">Team Members</p>
          </div>

          <div className="flex flex-col items-center justify-center  w-full">
            <h1 className="text-4xl text-neutral-900 mb-2">1000+</h1>
            <p className="text-neutral-600">Happy Clients</p>
          </div>

          <div className="flex flex-col items-center justify-center  w-full">
            <h1 className="text-4xl text-neutral-900 mb-2">5</h1>
            <p className="text-neutral-600">Years Experience</p>
          </div>

          <div className="flex flex-col items-center justify-center  w-full">
            <h1 className="text-4xl text-neutral-900 mb-2">99%</h1>
            <p className="text-neutral-600">Client Satisfaction</p>
          </div>
        </div>
      </div>

      <div className=" py-16 px-4 sm:px-6 lg:px-8 spacey-8">
        <div>
          <h1 className="text-3xl text-neutral-900 mb-4 text-center">
            Ready to Work Together?
          </h1>
          <div className="flex items-center justify-center">
            {" "}
            <p className="text-neutral-600 mb-8 flex  max-w-2xl text-center items-center justify-center ">
              Let's discuss how we can help bring your vision to life. Get in
              touch with our team today.
            </p>
          </div>
          <div className="flex item-center justify-center">
            <div className=" flex flex-col md:flex md:flex-row items-center justify-center gap-4 w-full md:max-w-[400px]">
              <button className="bg-indigo-600 border  text-white px-8 py-3 w-full rounded-lg hover:bg-indigo-800">
                {" "}
                Get Start
              </button>
              <button className="border border-neutral-300  text-neutral-700  w-full px-8 py-3 rounded-lg hover:bg-neutral-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <AboutFooter />
    </>
  );
}
