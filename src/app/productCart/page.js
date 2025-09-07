import { FaArrowLeftLong } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import Cartcard, { OrderSummary } from "./cartCard";
import Wishcard from "./wishCart";
import WishListFooter from "../wishList/wishListFooter";
export default function Cart() {
  const cartData = [
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/66a2a08b7c-17eb51abc028f0e44277.png",
      Name: "Wireless Bluetooth Headphones",
      newPrice: "$79.99",
      oldPrice: "$99.99 ",
      color: "Black",
      Brand: "Boat",
      size: "",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/0fba4acc66-b63ceec5a71ccede873d.png",
      Name: "Smart Fitness Watch",
      newPrice: "$199.99",
      oldPrice: "",
      color: "Navy-blue",
      Brand: "Samsang",
      size: "",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/f2dd659aa5-992e833d440c125c47b8.png",
      Name: "Ultra-thin Laptop",
      newPrice: "$899.99",
      oldPrice: "",
      color: "Golden",
      Brand: "Apple",
      size: "",
    },
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/7a68a69ffd-77a0a7fcfaa20c5fccbf.png",
      Name: "Premium Smartphone",
      newPrice: "$699.99",
      oldPrice: "",
      color: "Blue",
      Brand: "OnePlus",
      size: "",
    },
  ];
  const favourateProduct = [
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
    {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/59559f2884-ab96162409c103926261.png",
      Name: "Smartphone Pro",
      newPrice: "$699.99",
      oldPrice: "",
      off: "",
      type: "",
    },
  ];
  return (
    <>
      <div className="mt-[72px] max-w-[1380px] mx-auto px-4 sm:px-6 md:px-7 lg:px-8 py-8 overflow-hidden">
        <h1 className="text-3xl text-neutral-900 font-semibold mb-2">
          Shopping Cart
        </h1>
        <p className="text-neutral-600 text-lg mb-6">
          Review your items before checkout
        </p>

        <div className=" flex flex-col lg:grid  lg:grid-cols-3 gap-3   ">
          <div className=" lg:col-span-2 min-h-30 border border-neutral-200 rounded-xl">
            <div className=" px-2 py-6 sm:px-6  border-b border-neutral-200">
              <h1 className="text-xl text-neutral-900">Cart Items (3)</h1>
            </div>

            <div className="flex flex-col gap-5">
              {cartData.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="   shadow-[0_2px_4px_rgb(212,212,216)] "
                  >
                    <Cartcard
                      productImg={item.image}
                      productName={item.Name}
                      productNewPrice={item.newPrice}
                      productOldprice={item.oldPrice}
                      productColor={item.color}
                      productBrand={item.Brand}
                      productSize={item.size}
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between item-center  px-2 py-6 sm:px-6  border-t border-neutral-200 ">
              <button className="flex flex-row cursor-pointer  text-sm  sm:text-md group items-center text-neutral-500 hover:text-neutral-900 gap-1 sm:gap-2 ">
                <FaArrowLeftLong className=" " />
                Continue Shopping
              </button>

              <button className="flex gap-1 md:gap-2 text-sm  sm:text-md cursor-pointer text-neutral-500 hover:text-neutral-900 items-center">
                <RiDeleteBin6Line className="" />
                Clear Cart
              </button>
            </div>
          </div>
          <div className="bg-blue-50 lg:col-span-1 h-120 ">
            <OrderSummary />
          </div>
        </div>

        <div className="my-12 ">
          <h1 className="text-2xl text-neutral-900 mb-6">
            You might also like
          </h1>
          <div className="flex flex-row items-center overflow-x-auto  overflow-y-hidden scrollbar-hide  gap-2 md:gap-6  ">
            {favourateProduct.map((item, key) => {
              return (
                <div key={key} className="">
                  <Wishcard
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
        </div>
      </div>
      <WishListFooter />
    </>
  );
}
