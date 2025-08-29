import WishListCard from "./wishListCard";
import WishListFooter from "./wishListFooter";

export default function wishList() {
  const FavouratProducts = [
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
  ];    
  return (
    <div className="w-full overflow-hidden">
      <div className="mt-[80px] w-full">
        <div className=" pt-2 pb-30 sm:pb-20 px-2  sm:px-6 md:px-16 lg:px-18 xl:px-27 space-y-3 sm:space-y-4 md:spce-y-5 lg:space-y-6 xl:space-y-8">
          <h1 className="font-bold text-[22px] mb-10 md:text-[26px] text-center lg:text-[30px] xl:text-[32px] ">
            WishList
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  sm:gap-8 w-full m-0  h-full ">
            {FavouratProducts.map((item, key) => {
              return (
                <div key={key}>
                  <WishListCard
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
    </div>
  );
}
