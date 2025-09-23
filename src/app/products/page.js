import Image from "next/image";
import image from "../../../public/companyimage.jpg";
import Productfilter from "./productFilter";
import ProductCard from "./productCard";
import Productfooter from "./productFooter";
import Link from "next/link";
import { Paginationbar } from "@/components/pagination/pagination-bar";
export default function products() {
  const productData = [
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/66a2a08b7c-17eb51abc028f0e44277.png",
      Name: "Wireless Bluetooth Headphones",
      newPrice: "$79.99",
      oldPrice: "$99.99 ",
      off: "20% OFF",
      type: "",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/0fba4acc66-b63ceec5a71ccede873d.png",
      Name: "Smart Fitness Watch",
      newPrice: "$199.99",
      oldPrice: "",
      off: "",
      type: "",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/f2dd659aa5-992e833d440c125c47b8.png",
      Name: "Ultra-thin Laptop",
      newPrice: "$899.99",
      oldPrice: "",
      off: "",
      type: "NEW",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/7a68a69ffd-77a0a7fcfaa20c5fccbf.png",
      Name: "Premium Smartphone",
      newPrice: "$699.99",
      oldPrice: "",
      off: "",
      type: "",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/adc0aa9424-cb36cb38bcb1b56c953d.png",
      Name: "Mechanical Gaming Keyboard",
      newPrice: "$129.99",
      oldPrice: "$159.99 ",
      off: "",
      type: "SALE",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/a90f0a06ed-3ef10de019a43edf7dba.png",
      Name: "Wireless Gaming Mouse",
      newPrice: "$59.99",
      oldPrice: "",
      off: "",
      type: "",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/99ba2f2176-c0af536f5bef7af3b33b.png",
      Name: "Portable Bluetooth Speaker",
      newPrice: "$89.99",
      oldPrice: "",
      off: "",
      type: "HOT",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/eaddd1818d-f87afb878efcae6a9dbd.png",
      Name: "Digital Drawing Tablet",
      newPrice: "$299.99",
      oldPrice: "",
      off: "",
      type: "",
    },
  ];
  return (
    <>
      <div className="mt-[73px] flex justify-center  bg-neutral-50 min-h-[400px] items-center">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex   items-center">
          <div className="flex flex-col justify-start items-center my-10 gap-8 lg:gap-3 lg:grid lg:grid-cols-2">
            <div className="flex flex-col ">
              <h1 className=" text-3xl md:text-4xl text-black mb-4 animate-bounce duration-500">
                Discover Amazing Products
              </h1>
              <p className="text-neutral-600 text-lg mb-6">
                Find everything you need with our advanced search and filtering
                options
              </p>
              <div className="flex  item-center justify-start gap-3">
              <Link href="/login">  <button className="bg-gradient-to-r from-neutral-600 to bg-neutral-950 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 active:scale-90 cursor-pointer transition-all duration-300">
                  Shop Now
                </button></Link>
               <Link href="/about">   <button className="border border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg hover:bg-neutral-50  active:scale-90 cursor-pointer transition-all duration-300">
                  Learn More
                </button></Link>
              </div>
            </div>
            <Image
              alt="product image"
              src={image}
              className="h-73 sm:h-90 lg:h-80 rounded-lg sm:rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      <Productfilter />


      <div className=" pt-10 pb-35 sm:pb-20  px-3 md:px-16 lg:px-18 xl:px-27 space-y-4 sm:space-y-4 md:spce-y-5 lg:space-y-6 xl:space-y-8">
        <h1 className="font-normal text-neutral-800 text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] ">
          Search Results

        </h1>
         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  sm:gap-10 w-full m-0  h-full ">
          {productData.map((item, key) => {
            return (
              <div key={key}>
                <ProductCard
                  image={item.image}
                  productname={item.Name}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  off={item.off}
                  type={item.type}
                />
              </div>
            );
          })}
        </div>
        <div className="text-center  pt-7">
         <div className="flex justify-center mt-12 items-center"> <Paginationbar/></div>
        </div>
      </div>
      <Productfooter/>
    </>
  );
}
