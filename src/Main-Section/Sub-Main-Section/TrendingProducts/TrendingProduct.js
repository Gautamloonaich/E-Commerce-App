import TrandingCard from "./TrandingCard";

export default function TrendingProduct() {
  const trandingData = [
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
      <div className="  pb-1 pt-4  sm:pb-20  px-7 md:px-16 lg:px-18 xl:px-27 space-y-3 sm:space-y-4 md:spce-y-5 lg:space-y-6 xl:space-y-8">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] ">
            Trending Product
          </h1>
          <button className="text-indigo-500 font-medium hover:transition-transform hover:scale-120 hover:duration-250 hover:text-indigo-700 text-sm md:text-lg pr-2">
            View All
          </button>
        </div>
        <div className="flex flex-row items-center overflow-x-auto overflow-y-hidden scrollbar-hide w-full gap-2 md:gap-6  ">
          {trandingData.map((item, key) => {
            return (
              <div key={key}>
                <TrandingCard
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
          <button className="text-white px-3 md:px-4  border rounded-lg flex justify-center items-center hover:transition-transform hover:scale-105 hover:duration-250 h-[30px] md:h-[40px] bg-indigo-600 text-sm md:text-lg">
            More
          </button>
        </div>
      </div>
    </>
  );
}
