import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import NextLink from "next/link";

export default function PublicHeader() {
  return (
    <>
      <Navbar isBordered className=" h-[72px] fixed top-0 backdrop-blur-md bg-white/70 border-white/10 shadow-md ">
        <NavbarContent className="flex  pr-3" justify="start">
          <NavbarBrand>
            <p className="font-bold  text-[1.25rem] sm:text-[1.5rem] leading-[2rem]  text-indigo-600">
              ShopHub
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="pr-3" justify="end">
          <NavbarItem className="flex  m-0">
            <Link
              className="text-[rgba(55,65,81,0.6 )] text-[15px] sm:text-[18px] font-medium cursor-pointer flex  ml-5 hover:text-indigo-600"
              color="foreground"
               as={NextLink}
              href="/"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem className="flex">
            <Link
              className=" text-[rgba(55,65,81,0.6 )] text-[15px] sm:text-[18px] font-medium cursor-pointer  hover:text-indigo-600"
              color="foreground"
               as={NextLink}
              href="/products"
            >
              Products 
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
