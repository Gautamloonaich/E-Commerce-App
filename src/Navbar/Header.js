"use client";
import React  from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  Avatar,
} from "@heroui/react";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "About",
    "Deals",
    "Contacts",
    "My Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div className="w-full relative ">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className=" h-[72px] fixed top-0 bg-white"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="flex sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-[1.25rem] leading-[1.75rem] ">
              ShopHub
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <p className="font-bold  text-[1.5rem] leading-[2rem]  text-indigo-600">
              ShopHub
            </p>
          </NavbarBrand>

          <NavbarItem isActive>
            <Link
              className="text-[rgba(55,65,81,0.6 )] text-[18px] font-medium cursor-pointer  ml-5 hover:text-indigo-600 "
              color="foreground"
              href="#"
            >
              Home
            </Link>
          </NavbarItem>

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger className="">
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent gap-0.5 flex md:hidden text-[rgba(55,65,81,1 )] text-[18px] font-medium cursor-pointer  hover:text-indigo-600"
                  endContent={<FaAngleDown className="mt-2 " size={15} />}
                  radius="sm"
                  variant="light"
                >
                  More
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem key="autoscaling" description="Explor all sections">
                Categories
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Best discounts available "
              >
                Deals
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="Details about ShopHub"
              ><Link href="/aboutSection"> About</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavbarItem className="hidden md:flex">
            <Link
              className="text-[rgba(55,65,81,1 )] text-[18px] font-medium cursor-pointer   hover:text-indigo-600"
              color="foreground"
              aria-current="page"
              href="#"
            >
              Categories
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Link
              className="text-[rgba(55,65,81,1 )] text-[18px] font-medium cursor-pointe ml-5 hover:text-indigo-600"
              color="foreground"
              href="#"
            >
              Deals
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Link
              className="text-[rgba(55,65,81,1 )] text-[18px] font-medium cursor-pointer  ml-5 hover:text-indigo-600"
              color="foreground"
              href="/aboutSection"
            >
              About
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[10rem] h-11",
                mainWrapper: "h-full",

                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 ",
              }}
              placeholder="Search Products.."
              size="sm"
              startContent={<IoSearch className="ml-1" size={18} />}
              type="search"
              className="w-full min-w-50 xl:min-w-80  "
            />
          </NavbarItem>
          <NavbarItem>
            <FaHeart
              size={20}
              className="ml-1 sm:ml-3 hover:text-indigo-600 w-[17px] sm:w-[20px] text-gray-600"
            />
          </NavbarItem>
          <NavbarItem>
            <FaCartShopping
              size={21}
              className="ml-0 sm:ml-3 w-[17px] sm:w-[20px] hover:text-indigo-600 text-gray-600"
            />
          </NavbarItem>

          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform ml-3 mr-2.5 hidden sm:flex"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="/avatar.png"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold text-green-600">
                  gautamloonaich5822@gmail.com
                </p>
              </DropdownItem>
              <DropdownItem color="primary" key="settings">My Settings</DropdownItem>
              <DropdownItem color="primary" key="team_settings">Team Settings</DropdownItem>
              <DropdownItem color="primary" key="system">Contacts</DropdownItem>
              <DropdownItem color="primary" key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                className="text-red-600"
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
    </div>
  );
}
