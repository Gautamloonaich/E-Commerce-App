"use client";
import { Pagination } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
export default function Filtercategorie() {
  return (
    <>
      <Select
        size="sm"
        variant="bordered"
        radius="full"
        className=" w-45 sm:w-40 md:w-60 rounded-full  flex bg-white  "
        classNames={{
          base: "rounded-full",
          trigger:
            "h-2 border-2 border-gray-300 data-[open=true]:border-indigo-500 data-[focus=true]:border-indigo-500  ",
        }}
        label="Price Range"
      >
        <SelectItem
          value=""
          color="primary"
          radius="full"
          className="rounded-full"
        >
          Sort by: Populary
        </SelectItem>
        <SelectItem
          value=""
          radius="full"
          color="primary"
          className="rounded-full"
        >
          Sort by: Name A-Z
        </SelectItem>
        <SelectItem
          value=""
          radius="full"
          color="primary"
          className="rounded-full"
        >
          Sort by: Name Z-A
        </SelectItem>
        <SelectItem
          value=""
          radius="full"
          color="primary"
          className="rounded-full"
        >
          Sort by: Most Products
        </SelectItem>
      </Select>
    </>
  );
}

export function Paginationbar() {
  return (
    <>
      <Pagination
        showControls
        loop
        showShadow
        initialPage={1}
        size="lg"
        total={3}
        classNames={{ wrapper: "gap-2 sm:gap-3" }}
        className=""
      />
    </>
  );
}
