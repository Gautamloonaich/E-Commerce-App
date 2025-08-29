import Image from "next/image";
import image from "../../../public/companyimage.jpg" 
import Productfilter from "./productFilter";
export default function products(){
    return(
        <>
        <div className="mt-[73px] flex justify-center  bg-neutral-50 min-h-[400px] items-center">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex   items-center">
                   <div className="flex flex-col justify-start items-center my-10 gap-8 lg:gap-3 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col ">
                    <h1 className=" text-3xl md:text-4xl text-black mb-4">Discover Amazing Products</h1>
                    <p className="text-neutral-600 text-lg mb-6">Find everything you need with our advanced search and filtering options</p>
                    <div className="flex  item-center justify-start gap-3">
                        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-800 hover:scale-105 hover:transition-transform hover:duration-300">Shop Now</button>
                        <button className="border border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg hover:bg-neutral-50 hover:scale-105 hover:transition-transform hover:duration-300">Learn More</button>
                    </div>
                    </div>
                    <Image alt="product image" src={image} className="h-73 sm:h-90 lg:h-80 rounded-lg sm:rounded-xl object-cover"/>
                   </div>
            </div>
        </div>
        
        <Productfilter/>
        </>
    )
}