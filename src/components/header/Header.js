"use client";
import React from "react";
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
import { usePathname } from "next/navigation";
import NextLink from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  console.log(pathname);
  const menuItems = [
    "Home",
    "Profile",
    "About",
    "products",
    "Categories",
    "Contacts",
    "My Settings",
    "Log Out",
  ];
  let navbar = ["/login", "/signin"];
  if (navbar.includes(pathname)) {
    return null;
  } else {
    return (
      <div className=" max-w-7xl w-full relative ">
        <Navbar
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className=" h-[72px]  rounded-none sm:rounded-none  fixed top-0 sm:top-0 backdrop-blur-md bg-white/70 border-white/10 shadow-md "
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

            <NavbarItem>
              <Link
                className={
                  pathname === "/"
                    ? `text-[rgba(55,65,81,0.6 )] text-indigo-600 animate-bounce text-[18px] font-bold   ml-5 `
                    : `text-[rgba(55,65,81,0.6 )] hover:scale-90 hover:duration-400 text-[18px] font-medium cursor-pointer  ml-5 hover:text-indigo-600 `
                }
                color="foreground"
                as={NextLink}
                href="/"
              >
                Home
              </Link>
            </NavbarItem>

            <Dropdown>
              <NavbarItem>
                <DropdownTrigger className="">
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent gap-0.5 flex lg:hidden text-[rgba(55,65,81,1 )] text-[18px] font-medium cursor-pointer  hover:text-indigo-600"
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
                  base: "gap-4 ",
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  description="Explor all sections"
                >
                  <Link
                    as={NextLink}
                    href="/categories "
                    className={
                      pathname == "/categories"
                        ? `text-indigo-600 `
                        : `text-black`
                    }
                  >
                    Categories
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Best discounts available "
                >
                  <Link
                    as={NextLink}
                    href="/products "
                    className={
                      pathname == "/products" ? `text-indigo-600` : `text-black`
                    }
                  >
                    Products
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="production_ready"
                  description="Details about ShopHub"
                >
                  <Link
                    as={NextLink}
                    href="/about"
                    className={
                      pathname == "/about"
                        ? `text-indigo-600`
                        : `text-black`
                    }
                  >
                    {" "}
                    About
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <NavbarItem className="hidden md:flex">
              <Link
                as={NextLink}
                className={
                  pathname === "/categories"
                    ? `text-[rgba(55,65,81,0.6 )] animate-bounce text-indigo-600 text-[18px] font-bold  `
                    : `text-[rgba(55,65,81,0.6 )] text-[18px] hover:scale-90 hover:duration-600  font-medium cursor-pointer   hover:text-indigo-600 `
                }
                color="foreground"
                aria-current="page"
                href="/categories"
              >
                Categories
              </Link>
            </NavbarItem>
            <NavbarItem className="hidden md:flex">
              <Link
                as={NextLink}
                className={
                  pathname === "/products"
                    ? `text-[rgba(55,65,81,0.6 )] animate-bounce text-indigo-600 text-[18px]  ml-5 font-bold  `
                    : `text-[rgba(55,65,81,0.6 )] text-[18px] hover:scale-90 hover:duration-600  ml-5 font-medium cursor-pointer   hover:text-indigo-600 `
                }
                color="foreground"
                href="/products"
              >
                Products
              </Link>
            </NavbarItem>
            <NavbarItem className="hidden md:flex">
              <Link
                as={NextLink}
                className={
                  pathname === "/about"
                    ? `text-[rgba(55,65,81,0.6 )] animate-bounce text-indigo-600 text-[18px]  ml-5 font-bold  `
                    : `text-[rgba(55,65,81,0.6 )] text-[18px] hover:scale-90 hover:duration-600 ml-5 font-medium cursor-pointer   hover:text-indigo-600 `
                }
                color="foreground"
                href="/about"
              >
                About
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Input
                classNames={{
                  base: "max-w-full lg:max-w-[6rem] xl:max-w-[10rem] h-11",
                  mainWrapper: "h-full",

                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal rounded-full text-default-500 bg-default-400/20 dark:bg-default-500/20 ",
                }}
                placeholder="Search Products.."
                size="sm"
                startContent={<IoSearch className="ml-1" size={18} />}
                type="search"
                className="w-full min-w-40 xl:min-w-60  "
              />
            </NavbarItem>
            <NavbarItem>
              <Link as={NextLink} href="/wishList">
                {" "}
                <FaHeart
                  size={20}
                  className={
                    pathname == "/wishList"
                      ? `ml-1 sm:ml-3 animate-bounce text-indigo-600 w-[19px] sm:w-[22px] `
                      : `ml-1 sm:ml-3 hover:scale-90 hover:duration-400 hover:text-indigo-600 w-[17px] sm:w-[20px] text-gray-600`
                  }
                />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link as={NextLink} href="/cart">
                <FaCartShopping
                  size={21}
                  className={
                    pathname == "/cart"
                      ? `ml-0 sm:ml-3 w-[19px] animate-bounce sm:w-[22px] text-indigo-600  `
                      : `ml-0 sm:ml-3 w-[17px] sm:w-[20px] hover:scale-90 hover:duration-400 hover:text-indigo-600 text-gray-600`
                  }
                />
              </Link>
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
                <DropdownItem color="primary" key="settings" className="">
                  <Link as={NextLink} color="default" href="/profile">
                    My Settings
                  </Link>
                </DropdownItem>

                <DropdownItem color="primary" key="system">
                  <Link as={NextLink} color="default" href="/contact">
                    Contacts
                  </Link>
                </DropdownItem>
                <DropdownItem color="primary" key="help_and_feedback">
                  <Link as={NextLink} color="default" href="/profile">
                    Profile
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  className="text-red-600"
                >
                  <Link as={NextLink} color="danger" href="/login">
                    Log Out
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {/* <NavbarItem>
              <Button
               as={NextLink}
                color="secondary"
                href="/login"
                variant="flat"
                className="mr-0.5 h-8 min-w-3 p-2 rounded-md text-xs sm:h-10 sm:min-w-8 sm:rounded-xl sm:text-sm sm:p-5 "
              >
                Login
              </Button>
            </NavbarItem> */}
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
                  as={NextLink}
                  href={
                    item === "Home" ? "/" :
                      item === "Profile"
                        ? "/profile"
                        : item === "About"
                          ? "/about"
                          : item === "products"
                            ? "/products"
                            : item === "Categories" ?
                              "/categories" :
                              item === "Contacts"
                                ? "/contact"
                                : item === "My Settings"
                                  ? "/profile"
                                  : "/login"
                  }
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
}
