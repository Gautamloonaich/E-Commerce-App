"use client";
import { useEffect, useState } from "react";
import image01 from "../../../public/companyimage.jpg"
import image02 from "../../../public/aboutImage02.jpg"
import image03 from "../../../public/aboutImage03.jpg"
import image04 from "../../../public/aboutImage04.jpg"
import Image from "next/image";

export default function Images() {
  let Comapnyimage = [
    image01,
    image02,
    image03,
   image04,
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
        className="h-80 sm:h-100 lg:h-80 max-w-full flex rounded-xl   object-cover "
      />
      
    </div>
  );
}

