"use client";
import { MdOutlineSecurity } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { Button } from "@heroui/react";
import { FaRegHeart } from "react-icons/fa6";
import { Image } from "@heroui/react";
import { useEffect, useState } from "react";

export default function ProductDetailCard() {
  let colorButt = ["color1", "color2", "color3", "color4"];
  let storageButt = ["128GB", "256GB", "512GB"];
  let productImage = [
    {
      type: "image",
      Url: "https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg",
      alt: "iphone fornt image",
    },
    {
      type: "vidio",
      Url: "/iphonevidio.mp4",
      alt: "iphone demo vidio",
    },
    {
      type: "image",
      Url: "https://m.media-amazon.com/images/I/51brdXeugJL._SL1500_.jpg",
      alt: "iphone back  image",
    },
    {
      type: "image",
      Url: "https://m.media-amazon.com/images/I/712CBkmhLhL._SL1500_.jpg",
      alt: "iphones side image",
    },

    {
      type: "image",
      Url: "https://m.media-amazon.com/images/I/61f4dTush1L._SL1500_.jpg",
      alt: "iphone all colors image",
    },
    {
      type: "image",
      Url: "https://m.media-amazon.com/images/I/617JW0DrG8L._SL1500_.jpg",
      alt: "iphone combo image",
    },
  ];
  let Dot = [1, 2, 3, 4, 5, 6];
  let [imageData, setImagedata] = useState(productImage);
  let [index, setindex] = useState(0);
  let [image, setimage] = useState(imageData[index].Url);
  let [storage, setstorage] = useState("128GB");
  let [count, setcount] = useState(1);
  let lastindex = imageData.length - 1;
  console.log(image);
  function handlecountInc() {
    setcount((prev) => prev + 1);
  }
  function handlecountDec() {
    setcount(count > 1 ? count - 1 : 1);
  }
  function handleSliderbutton(direction) {
    direction === "right"
      ? index === lastindex
        ? setindex(index === lastindex)
        : setindex(index + 1)
      : index == 0
      ? setindex((index = 0))
      : setindex(index - 1);
    //setindex(Math.min(index+1,lastindex))
    //setindex(Math.max(index-1,0))
  }

  useEffect(() => {
    setimage(imageData[index]?.Url);
  }, [index]);
  //  if i can move the image automatically then i will use this
  //    useEffect(()=>{
  //     setTimeout(()=>{
  //     handleSliderbutton("right")
  //     },1000)
  //     return()=>{
  //       clearInterval(2000)
  //     }
  //    },[index])
  // console.log(index);

  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3 sm:gap-12">
        <div className="flex flex-col  h-full gap-5">
          <div className="flex px-4  relative ">
            <button
              disabled={index == 0}
              className=" cursor-pointer hover:text-neutral-700  text-neutral-500 w-10 absolute z-50 top-[40%] font-extrabold  text-3xl bg-transparent  left-[-15] rounded-r-lg  py-6 px-2 flex  sm:hidden "
              onClick={() => handleSliderbutton("left")}
            >
              <p className="hover:transition-transform hover:scale-120 hover:duration-300">
                {"<"}
              </p>
            </button>
            <button
              disabled={index == lastindex}
              className=" cursor-pointer hover:text-neutral-700 text-neutral-500 w-10 absolute z-50 top-[40%] font-extrabold text-3xl  bg-transparent   rounded-l-lg right-[-20] flex  sm:hidden py-6 px-2 "
              onClick={() => handleSliderbutton("right")}
            >
              <p className="hover:transition-transform hover:scale-120 hover:duration-300">
                {">"}
              </p>
            </button>

            {image != "/iphonevidio.mp4" ? (
              <Image
                src={image}
                alt="iphone 15"
                isZoomed
                width={900}
                className="  rounded-md cursor-zoom-in "
              />
            ) : (
              <div className="   w-full">
                <video
                  autoPlay
                  muted
                  loop
                  src={image}
                  alt=" product vidio"
                  className="cursor-pointer aspect-[1/1] h-full w-full  rounded-lg object-cover "
                />
              </div>
            )}
          </div>
          <div className="flex sm:hidden justify-center items-center gap-2">
            {Dot.map((item, key) => {
              return (
                <button
                  key={key}
                  className={
                    item === index + 1
                      ? `w-5 h-1.5 rounded-lg bg-blue-600 cursor-pointer`
                      : `w-3 h-1.5 rounded-lg bg-neutral-600 cursor-pointer`
                  }
                  onClick={() => setindex(item - 1)}
                ></button>
              );
            })}
          </div>

          <div className="flex justify-center  gap-3 sm:gap-2 lg:gap-5  px-2 py-3  ">
            {imageData.map((item, key) => {
              return (
                <div key={key}>
                  <div className="hidden sm:flex  ">
                    {item.type == "image" ? (
                      <Image
                        src={item.Url}
                        alt={item.alt}
                        isZoomed
                        radius="md"
                        width={200}
                        className=" rounded-md border  border-neutral-300 cursor-pointer "
                        onClick={() => setimage(item.Url)}
                      />
                    ) : (
                      <video
                        disablePictureInPicture
                        muted
                        loop
                        width={100}
                        src={item.Url}
                        alt={item.alt}
                        onClick={() => setimage(item.Url)}
                        className=" border border-neutral-300 h-full  rounded-sm  p-0 m-0  object-cover  cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium sm:text-3xl text-neutral-900 mb-2">
            iphone 15{" "}
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-2xl  font-medium sm:text-3xl text-neutral-700">
              $999
            </span>
            <span className="text-md sm:text-lg  text-blue-500 line-through">
              $1,199
            </span>
            <span className=" bg-neutral-800 text-white px-2 py-1 text-sm rounded">
              Save $200
            </span>
          </div>
          <div className="border-t border-neutral-200 pt-6 mt-6">
            <h1 className="text-lg text-neutral-900 mb-4">Color</h1>
            <div className="flex gap-2">
              {colorButt.map((item, key) => {
                return (
                  <div key={key} className=" flex gap-2">
                    <button
                      className={`w-7 sm:w-9 h-7 sm:h-9 
                                        ${
                                          item == "color1"
                                            ? "bg-blue-900"
                                            : item == "color2"
                                            ? "bg-white"
                                            : item == "color3"
                                            ? "bg-black"
                                            : "bg-green-700"
                                        }
                                        rounded-full border border-neutral-300 cursor-pointer`}
                    ></button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-6 mt-6">
            <h1 className="text-lg text-neutral-900 mb-4">Storage</h1>
            <div className="flex gap-3 ">
              {storageButt.map((item, key) => {
                return (
                  <div key={key} className="w-full">
                    <button
                      className={
                        storage == item
                          ? "bg-black text-white border w-full border-neutral-300 rounded-md px-4 py-2"
                          : "border w-full border-neutral-300 cursor-pointer rounded-md px-4 py-2"
                      }
                      onClick={() => setstorage(item)}
                    >
                      {item}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-t flex flex-col gap-4 border-neutral-200 pt-6 mt-6 [&>*]:flex [&>*]:gap-2">
            <div>
              <MdLocalShipping size={23} className="text-neutral-600" />
              <p className="text-sm text-neutral-600">
                Free shipping on orders over $50
              </p>
            </div>
            <div>
              <MdOutlineSecurity size={23} className="text-neutral-600" />
              <p className="text-sm text-neutral-600">
                2-year warranty included
              </p>
            </div>
            <div>
              <IoIosTime size={23} className="text-neutral-600" />
              <p className="text-sm text-neutral-600">
                In stock - Ships within 24 hours
              </p>
            </div>
          </div>
          <div className=" mt-6 flex flex-col gap-5 border-neutral-200 border-t-1 pt-7">
            <div className="flex gap-7">
              <div className="flex gap-2 items-center">
                <Button
                  variant="bordered"
                  className="min-w-10 text-xl  px-2  text-neutral-600 font-bold pb-1 "
                  onClick={handlecountDec}
                >
                  -
                </Button>
                {count}
                <Button
                  variant="bordered"
                  className="min-w-10  text-xl  px-2 font-bold text-neutral-600 pb-1"
                  onClick={handlecountInc}
                >
                  +
                </Button>
              </div>
              <div className="w-full">
                <Button className="w-full bg-black text-white rounded-md font-semibold">
                  Add to cart
                </Button>
              </div>
            </div>
            <div className="group">
              <Button
                variant="flat"
                className="w-full rounded-md border  border-neutral-300  cursor-pointer  font-semibold"
                startContent={<FaRegHeart size={20} className="mr-3 " />}
              >
                ADD to WishList
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
