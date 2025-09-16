"use client"

import { useState } from "react";
export  default function ProductSummary(){
   let summaryButt=["Description","Spefification","Review","Shipping"];
   let [details,setDetails]=useState("Description");

  return(
    <>
     <div className="flex flex-col gap-7" >
          <div className="flex flex-row gap-7  ">
               <div className="flex gap-5 border-b-1 w-full overflow-x-auto scrollbar-hide border-neutral-300">
               {
                   summaryButt.map((item ,key)=>{
                    return(<div key={key} >
                         <button className={details==item ? "border-b-2   border-neutral-600 font-semibold p-4":"border-b-2 cursor-pointer border-white p-4"} onClick={()=>setDetails(item)}>{item}</button>
                    </div>)
                   })
               }
               </div>
          </div>
          <div className="px-1 sm:px-3">
            <p className="text-neutral-600 mb-4">The iPhone 15 Pro represents the pinnacle of smartphone technology, featuring the revolutionary A17 Pro chip and an all-new titanium design. Experience unprecedented performance and durability in a device that pushes the boundaries of what's possible.</p>
            <p className="text-neutral-600 mb-4">Key features include a 48MP main camera with 2x Telephoto, Action button for quick shortcuts, and USB-C connectivity. The titanium construction makes it lighter yet stronger than ever before.</p>
            <div>
                <h1 className="text-lg text-neutral-900 mb-2">What's in the box:</h1>
                <ol className="[&>*]:text-neutral-600 space-y-1 [&>*]:pl-2">
                    <li>iPhone 15 Pro</li>
                     <li>USB-C to USB-C Cable</li>
                      <li>Documentation</li>

                </ol>
            </div>
          </div>

        </div>

    </>
  )
}