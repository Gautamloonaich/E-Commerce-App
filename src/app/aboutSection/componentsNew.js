"use client";
import { Image } from "@heroui/react";
import { useEffect, useState } from "react";
export default function Images() {
  let Comapnyimage = [
    "/companyimage.jpg",
    "/aboutImage02.jpg",
    "/aboutImage03.jpg",
    "/aboutImage04.jpg",
  ];
  let [index, setindex] = useState(0);
  let [currentImage, setCurrentImage] = useState(Comapnyimage[index]);
  let ComapnyimageLength = Comapnyimage.length - 1;
  useEffect(() => {
    setCurrentImage(Comapnyimage[index]);
  }, [index]);

  useEffect(() => {
    let interval = setTimeout(() => {
      setindex((prev) => (prev === ComapnyimageLength ? 0 : prev + 1));
    }, 1500);
    return () => clearTimeout(interval);
  }, [Comapnyimage[index]]);
  return (
    <div className="w-full min-h-[300px]">
      <Image
        alt="company image"
        src={currentImage}
        isZoomed
        className="max-w-full w-full flex rounded-xl object-cover "
        classNames={{
          wrapper: "",
          img: "w-full min-h-100 object-cover ",
        }}
      />
    </div>
  );
}

export function GoogleMap(){

    return(
        <>
        <h1>We wre Here</h1>

        </>
    )
}
