
"use client"
import {Pagination} from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
export default function Filtercategorie() {
  return (
    <>
      <Select
        size="sm"
        variant="bordered"
        className=" w-45 sm:w-40 md:w-60  flex bg-white  rounded-lg"
        classNames={{
          trigger:
            "h-2 border-2 border-gray-300 data-[open=true]:border-indigo-500 data-[focus=true]:border-indigo-500  ",
        }}
        label="Price Range"
      >
        <SelectItem value="" color="primary">
          Sort by: Populary
        </SelectItem>
        <SelectItem value="" color="primary">
          Sort by: Name A-Z
        </SelectItem>
        <SelectItem value="" color="primary">
          Sort by: Name Z-A
        </SelectItem>
        <SelectItem value="" color="primary">
          Sort by: Most Products
        </SelectItem>
      </Select>
    </>
  );
}

export function Paginationbar(){
    return(
        <>
      <Pagination showControls loop  showShadow initialPage={1} size="lg" total={3} classNames={{wrapper:"gap-2 sm:gap-3"}} className=""/>
    </>
    )
}