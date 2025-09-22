"use client";
import { useState } from "react";
import Card from "./ProductCard";
import { Select, SelectItem } from "@heroui/react";

export default function FeatureedProduct() {
  const productData = [
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/66a2a08b7c-17eb51abc028f0e44277.png",
      Name: "Wireless Bluetooth Headphones",
      newPrice: "$79.99",
      brand: "Sony",
      rating: "4.9",
      oldPrice: "$99.99 ",
      off: "20% OFF",
      type: "",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/0fba4acc66-b63ceec5a71ccede873d.png",
      Name: "Smart Fitness Watch",
      newPrice: "$199.99",
      brand: "Apple",
      rating: "3.7",
      oldPrice: "",
      off: "",
      type: "",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/f2dd659aa5-992e833d440c125c47b8.png",
      Name: "Ultra-thin Laptop",
      newPrice: "$899.99",
      brand: "Apple",
      rating: "4.1",
      oldPrice: "",
      off: "",
      type: "NEW",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/7a68a69ffd-77a0a7fcfaa20c5fccbf.png",
      Name: "Premium Smartphone",
      newPrice: "$699.99",
      brand: "Samsung",
      rating: "4.5",
      oldPrice: "",
      off: "",
      type: "",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/adc0aa9424-cb36cb38bcb1b56c953d.png",
      Name: "Mechanical Gaming Keyboard",
      newPrice: "$129.99",
      brand: "Sony",
      rating: "4.7",
      oldPrice: "$159.99 ",
      off: "",
      type: "SALE",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/a90f0a06ed-3ef10de019a43edf7dba.png",
      Name: "Wireless Gaming Mouse",
      newPrice: "$59.99",
      brand: "Apple",
      rating: "2.5",
      oldPrice: "",
      off: "",
      type: "",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/99ba2f2176-c0af536f5bef7af3b33b.png",
      Name: "Portable Bluetooth Speaker",
      newPrice: "$89.99",
      brand: "Sony",
      rating: "3.3",
      oldPrice: "",
      off: "",
      type: "HOT",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/eaddd1818d-f87afb878efcae6a9dbd.png",
      Name: "Digital Drawing Tablet",
      newPrice: "$299.99",
      brand: "Apple",
      rating: "1.9",
      oldPrice: "",
      off: "",
      type: "",
    },
  ];
  const productPrice = ["Under $50", "$50 - $100", "$100 - $500", "Above $500"];
  const productsCategory = ["Apple", "Samsung", "Nike", "Sony"];
  const productsRating = ["4+", "3+", "2+", "1+"];
  const sortBy = [" Low to High ", " High to Low", "Customer Rating", "Newest"];

  let [productsData, setProductsData] = useState(productData);
  let [activePrice, setActivePrice] = useState("");
  let [activeBrand, setactiveBrand] = useState("");
  let [activeRating, setActiveRating] = useState("");
  let [sortBY, setSortBy] = useState("");
  console.log(activePrice);
  console.log(activeBrand);
  console.log(activeRating);
  console.log(sortBY);
  // overall filter
  let filterData = productsData
    .filter((item) => {
      let itemPrice = Number(item.newPrice.replace("$", "").trim());
      console.log(itemPrice);
      return activePrice == ""
        ? true
        : (activePrice === "Under $50" && itemPrice < 50) ||
            (activePrice == "$50 - $100" &&
              itemPrice > 50 &&
              itemPrice < 100) ||
            (activePrice == "$100 - $500" &&
              itemPrice > 100 &&
              itemPrice < 500) ||
            (activePrice === "Above $500" && itemPrice > 500);
    })
    .filter((item) => {
      return activeBrand == "" ? true : item.brand == activeBrand;
    })
    .filter((item) => {
      return activeRating == "" ? true : item.rating >= parseInt(activeRating);
    });
  // filter by price (indivisible)
  //  let filterByPrice productsData.filter((item)=>{
  //    let itemPrice= Number(item.newPrice.replace("$","").trim());
  //     console.log(itemPrice)
  //     return (
  //        activePrice=="" ? true : ((activePrice==="Under $50" && itemPrice < 50) || (activePrice=="$50 - $100" && itemPrice>50 && itemPrice < 100 )|| (activePrice=="$100 - $500" && itemPrice >100 && itemPrice < 500)|| (activePrice==="Above $500" && itemPrice >500) )
  //     )
  //  })
  //filter By Brand (indivisible)

  // let filterByBrands= filterByPrice.filter((item)=>{
  // return  ( activeBrand=="" ?  true:  item.brand==activeBrand  )
  // })

  //filter By Rating (indivisible)
  //  let filterByRating= filterByBrands.filter((item)=>{
  //     return(
  //       activeRating=="" ? true: (item.rating) >= parseInt(activeRating)
  //     )
  // })

  // FilterBy Sort (indivisible)
  // let datas=[...data]
  //  let sortdata= sort==="" ? datas : (sort==="Low to High" ? datas.sort((a,b)=>a.newPrice- b.newPrice): sort==" High to Low " ? datas.sort((a,b)=> b.newPrice - a.newPrice ): sort=="Customer Rating" ? datas.sort((a,b)=> a.rating - b.rating) :  datas.filter(item=>item.type==='NEW'))

  return (
    <>
      <div className=" sticky top-[72px] flex items-center justify-center  z-10">
        <div className="py-2 mt-0 sm:mt-2.5  flex items-center justify-center rounded-0 sm:rounded-full  max-w-7xl w-full mx-0 sm:mx-4 md:mx-6 lg:mx-8 bg-neutral-400/20 backdrop-blur-md ">
          <div className="  w-[97%] sm:w-[92%] md:w-[87%] flex overflow-x-auto py-1  scrollbar-hide lg:overflow-x-hidden flex-row items-center justify-between">
            <div className="flex flex-col lg:flex-row gap-4 px-[24px] sm:px-[0px]">
              <p className="text-gray-700 font-medium lg:mt-3 hidden ml-1 lg:flex ">
                Filter by:
              </p>
              <div className="flex justify-center items-start flex-row max-w-full flex-nowrap gap-4 md:gap-6 lg:gap-8">
                <div className="flex max-w-full flex-wrap md:flex-nowrap gap-4">
                  {/* 1           */}

                  <Select
                    size="sm"
                    variant="bordered"
                    radius="full"
                    className="w-40 bg-white  ml-2 rounded-full"
                    onSelectionChange={(keys) => {
                      const first = Array.from(keys)[0] ?? "";
                      setActivePrice(String(first));
                    }}
                    classNames={{
                      base: "rounded-full",
                      trigger:
                        "min-h-5 border-2 border-gray-300 cursor-pointer data-[open=true]:border-indigo-500  data-[focus=true]:border-indigo-500  ",
                    }}
                    label="Price Range"
                  >
                    {productPrice.map((item, key) => {
                      return (
                        <SelectItem key={item} color="primary">
                          {item}
                        </SelectItem>
                      );
                    })}
                  </Select>
                </div>
                {/* 2           */}
                <div className="flex max-w-full flex-wrap md:flex-nowrap gap-4">
                  <Select
                    size="sm"
                    onSelectionChange={(keys) => {
                      const first = Array.from(keys)[0] ?? "";
                      setactiveBrand(String(first));
                    }}
                    variant="bordered"
                    radius="full"
                    className="w-30 bg-white  rounded-full"
                    classNames={{
                      trigger:
                        "min-h-10 border-2 cursor-pointer border-gray-300 data-[open=true]:border-indigo-500 data-[focus=true]:border-indigo-500 ",
                    }}
                    label="Brand"
                  >
                    {productsCategory.map((itemes, key) => {
                      return (
                        <SelectItem key={itemes} color="primary">
                          {itemes}
                        </SelectItem>
                      );
                    })}
                  </Select>
                </div>
                <div className="flex max-w-full flex-wrap md:flex-nowrap gap-4">
                  {/* 3           */}

                  <Select
                    size="sm"
                    radius="full"
                    onSelectionChange={(keys) => {
                      const first = Array.from(keys)[0] ?? "";
                      setActiveRating(String(first));
                    }}
                    variant="bordered"
                    className="w-30 bg-white rounded-full"
                    classNames={{
                      trigger:
                        "min-h-10 border-2 cursor-pointer border-gray-300 data-[open=true]:border-indigo-500 data-[focus=true]:border-indigo-500 ",
                    }}
                    label="Rating"
                  >
                    {productsRating.map((items, key) => {
                      return (
                        <SelectItem key={items} color="primary">
                          {items}
                        </SelectItem>
                      );
                    })}
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-4 ml-15">
              <span className="text-gray-700 hidden lg:flex lg:mt-3 font-medium">
                Sort by:
              </span>
              {/* 4           */}
              <div className="flex max-w-full flex-wrap md:flex-nowrap gap-4">
                <Select
                  size="sm"
                  radius="full"
                  onSelectionChange={(keys) => {
                    const first = Array.from(keys)[0] ?? "";
                    setSortBy(String(first));
                  }}
                  variant="bordered"
                  className="w-50 bg-white  rounded-full"
                  classNames={{
                    trigger:
                      "min-h-10 border-2 cursor-pointer border-gray-300 data-[open=true]:border-indigo-500 data-[focus=true]:border-indigo-500 ",
                  }}
                  label="Featured"
                >
                  {sortBy.map((items, key) => {
                    return (
                      <SelectItem key={items} color="primary">
                        {items}
                      </SelectItem>
                    );
                  })}
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-8 pb-30 sm:pb-20  px-7 md:px-16 lg:px-18 xl:px-27 space-y-3 sm:space-y-4 md:spce-y-5 lg:space-y-6 xl:space-y-8">
        <h1 className="font-bold text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] ">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9  ">
          {filterData.map((item, key) => {
            return (
              <div key={key}>
                <Card
                  image={item.image}
                  productname={item.Name}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  brand={item.brand}
                  rating={item.rating}
                  off={item.off}
                  type={item.type}
                />
              </div>
            );
          })}
        </div>
        <div className="text-center  pt-7">
          <button className=" text-sm sm:text-md rounded-lg py-2 px-4 sm:px-8 sm:py-3 text-white font-medium sm:font-bold hover:transition-transform hover:scale-110 hover:duration-300 bg-indigo-500 cursor-pointer hover:bg-indigo-700  ">
            Load More Products
          </button>
        </div>
      </div>
    </>
  );
}
