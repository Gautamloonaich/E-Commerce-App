"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";

export default function AboutNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" h-[72px]  bg-white"
    >
      <NavbarContent className="flex  pr-3" justify="start">
        <NavbarBrand>
          <p className="font-bold text-[1.5rem] leading-[1.75rem] text-indigo-600 ">ShopHub</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className=" sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className=" hidden sm:flex" justify="end">
        <NavbarItem isActive>
          <Link
            className="text-[rgba(55,65,81,0.6 )] text-[18px] font-normal cursor-pointer  ml-5 hover:text-indigo-600 "
            color="foreground"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className=" text-[18px] font-bold   ml-5 text-indigo-600 "
            color="foreground"
            href="#"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="text-[rgba(55,65,81,0.6 )] text-[18px] font-normal cursor-pointer  ml-5 hover:text-indigo-600 "
            color="foreground"
            href="#"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="text-[rgba(55,65,81,0.6 )] text-[18px] font-normal cursor-pointer  ml-5 hover:text-indigo-600 "
            color="foreground"
            href="#"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
