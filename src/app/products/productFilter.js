"use client";
import { Select, SelectItem } from "@heroui/react";
export default function Productfilter() {
  const filterproduct = [
    [
      { key: "Any Price", label: "Any Price" },
      { key: "Under $50", label: "Under $50" },
      { key: "$50 - $100", label: "$50 - $100" },
      { key: "$100 - $500", label: "$100 - $500" },
      { key: "Under $50", label: "Under $50" },
    ],

    [
      { key: "all categories", label: "all categories" },
      { key: "Electronices", label: "Electronices" },
      { key: "Home & Garden", label: "Home & Garden" },
      { key: "Fashion", label: "Fashion" },
      { key: "Books & Media", label: "Books & Media" },
      { key: "Health & Beauty", label: "Health & Beauty" },
      { key: "Sports & Outdoor", label: "Sports & Outdoor" },


    ],

    [
      { key: "4+", label: "4+" },
      { key: "3+", label: "3+" },
      { key: "2+", label: "2+" },
      { key: "1+", label: "1+" },
    ],
  ];
  const sortBy = [
    { key: "Revalance", label: "Relevance" },
    { key: "Price: Low to High", label: "Price: Low to High" },
    { key: "Price: High to Low", label: "Price: High to Low" },
    { key: "Customer Rating", label: "Customer Rating" },
    { key: "Newest", label: "Newest" },
  ];

  return (
    
   <div className=" sticky z-10">
      <div className="py-2 mt-3  flex items-center justify-center ">
        <div className=" w-7xl px-4 sm:px-6 lg:px-8 flex overflow-x-auto py-2  scrollbar-hide lg:overflow-x-hidden flex-row items-center justify-between">
          <div className="flex flex-col lg:flex-row gap-4 ">
            <p className="text-gray-700 font-medium lg:mt-3 hidden ml-1 md:flex ">
              Filter by:
            </p>
            <div className="flex justify-center items-start flex-row max-w-full flex-nowrap gap-4 md:gap-6 lg:gap-8">
              <div className="flex max-w-full flex-wrap md:flex-nowrap gap-4">
                <Select
                  size="sm"
                  variant="bordered"
                  className="w-30 bg-white  rounded-lg"
                  classNames={{
                    trigger:
                      "min-h-5 border-2 border-gray-300 data-[open=true]:border-indigo-500 data-[focus=true]:border-indigo-500  ",
                  }}
                  label="Price range"
                >
                  {filterproduct[0].map((item, key) => {
                    return (
                      <SelectItem key={key} value={item.key} color="primary">
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
                  className="w-40 bg-white  rounded-lg"
                  classNames={{
                    trigger:
                      "min-h-10 border-2 border-gray-300 data-[open=true]:border-indigo-500 data-[focus=true]:border-indigo-500 ",
                  }}
                  label="Categories"
                >
                  {filterproduct[1].map((itemes, key) => {
                    return (
                      <SelectItem key={key} value={itemes.key} color="primary">
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
                  {filterproduct[2].map((items, key) => {
                    return (
                      <SelectItem key={key} value={items.id} color="primary">
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
                    <SelectItem key={key} value={items.id} color="primary">
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
