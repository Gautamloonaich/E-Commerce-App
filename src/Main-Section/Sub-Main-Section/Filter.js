"use client";
import { Select, SelectItem } from "@heroui/react";
export default function Filter() {
  const filteredBy = [
    [
      { key: "Under $50", label: "Under $50" },
      { key: "$50 - $100", label: "$50 - $100" },
      { key: "$100 - $500", label: "$100 - $500" },
      { key: "Under $50", label: "Under $50" },
    ],

    [
      { key: "Apple", label: "Apple" },
      { key: "samsung", label: "samsung" },
      { key: "Nike", label: "Nike" },
      { key: "Sony", label: "Sony" },
    ],

    [
      { key: "4+", label: "4+" },
      { key: "3+", label: "3+" },
      { key: "2+", label: "2+" },
      { key: "1+", label: "1+" },
    ],
  ];
  const sortBy = [
    { key: "Price: Low to High", label: "Price: Low to High" },
    { key: "Price: High to Low", label: "Price: High to Low" },
    { key: "Customer Rating", label: "Customer Rating" },
    { key: "Newest", label: "Newest" },
  ];

  return (
    
   <div className=" sticky top-[72px] z-10">
      <div className="py-2 my-6  flex items-center justify-center bg-gray-100">
        <div className="  w-[97%] sm:w-[92%] md:w-[88%] flex overflow-x-auto py-2  scrollbar-hide lg:overflow-x-hidden flex-row items-center justify-between">
          <div className="flex flex-col lg:flex-row gap-4 px-[24px] sm:px-[0px]">
            <p className="text-gray-700 font-medium lg:mt-3 hidden ml-1 md:flex ">
              Filter by:
            </p>
            <div className="flex justify-center items-start flex-row max-w-full flex-nowrap gap-4">
              <div className="flex max-w-full flex-wrap md:flex-nowrap gap-4">
                <Select
                  size="sm"
                  variant="bordered"
                  className="w-30 bg-white  rounded-lg"
                  classNames={{
                    trigger:
                      "min-h-5 border-2 border-gray-300 data-[open=true]:border-indigo-500 data-[focus=true]:border-indigo-500  ",
                  }}
                  label="Price Range"
                >
                  {filteredBy[0].map((item, key) => {
                    return (
                      <SelectItem key={key} value={item.key}>
                        {item.label}
                      </SelectItem>
                    );
                  })}
                </Select>
              </div>

              <div className="flex max-w-full flex-wrap md:flex-nowrap gap-4">
                <Select
                  size="sm"
                  variant="bordered"
                  className="w-30 bg-white  rounded-lg"
                  classNames={{
                    trigger:
                      "min-h-10 border-2 border-gray-300 data-[open=true]:border-indigo-500 data-[focus=true]:border-indigo-500 ",
                  }}
                  label="Brand"
                >
                  {filteredBy[1].map((itemes, key) => {
                    return (
                      <SelectItem key={key} value={itemes.key}>
                        {itemes.label}
                      </SelectItem>
                    );
                  })}
                </Select>
              </div>

              <div className="flex max-w-full flex-wrap md:flex-nowrap gap-4">
                <Select
                  size="sm"
                  variant="bordered"
                  className="w-30 bg-white rounded-lg"
                  classNames={{
                    trigger:
                      "min-h-10 border-2 border-gray-300 data-[open=true]:border-indigo-500 data-[focus=true]:border-indigo-500 ",
                  }}
                  label="Rating"
                >
                  {filteredBy[2].map((items, key) => {
                    return (
                      <SelectItem key={key} value={items.id}>
                        {items.label}
                      </SelectItem>
                    );
                  })}
                </Select>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-start gap-4 ml-15">
            <span className="text-gray-700 hidden md:flex lg:mt-3 font-medium">
              Sort by:
            </span>

            <div className="flex max-w-full flex-wrap md:flex-nowrap gap-4">
              <Select
                size="sm"
                variant="bordered"
                className="w-50 bg-white  rounded-lg"
                classNames={{
                  trigger:
                    "min-h-10 border-2 border-gray-300 data-[open=true]:border-indigo-500 data-[focus=true]:border-indigo-500 ",
                }}
                label="Featured"
              >
                {sortBy.map((items, key) => {
                  return (
                    <SelectItem key={key} value={items.id}>
                      {items.label}
                    </SelectItem>
                  );
                })}
              </Select>
            </div>
          </div>
        </div>
      </div>
     </div>

   
  );
}
