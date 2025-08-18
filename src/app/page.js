"use client"

import { Button, Spinner } from "@heroui/react";

export default function Home() {
  return (
    <>
  
  <h1 className="text-center mt-5 font-bold text-4xl">E-commerce-app</h1>
  <Button color="secondary" variant="ghost" size="lg" className=" m-5">click me</Button>
     <Spinner classNames={{label: "text-foreground mt-2 "}} label="spinner" variant="spinner" className="mt-2"/>


  </>
  );
}
