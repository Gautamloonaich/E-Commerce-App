"use client"
import { HeroUIProvider } from "@heroui/react"
import { useEffect, useState } from "react";
export default function Providerhero({children}){
    let [isclinent,setisclient]=useState(false);
    useEffect(()=>{
        setisclient(true);
    },[])
    if(!isclinent) return null ;
    return (
          <HeroUIProvider >
                  {children}
          </HeroUIProvider>
    )
}