"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {MdOutlineGamepad} from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

export default function Home() {
 
  return (
    <main className="w-full min-h-screen bg-[rgb(41,41,41)] container mx-auto px-5  p-24 py-5   flex flex-col  items-center justify-center  space-y-3" style={{
      background:"url(/static/bg.jpg)",
      backgroundSize:"cover"
    }}>   

    {/* Nav */}
    <div className="flex gap-5 items-center w-full px-96 justify-between">
          {/* Icon */}
    <div className="flex items-center justify-center my-5 text-4xl  text-white backdrop-blur-lg bg-[rgb(66,66,66)] bg-opacity-50 p-5 px-8 rounded-full gap-1" style={{border:"dotted solid 2px"}}>
      <div className="text-5xl " style={{rotate:"15deg"}}>
          <MdOutlineGamepad />
      </div>
      <div className="font-semibold cursor-pointer">
        GR
    </div>
</div>
<div className=" flex gap-2 ">
  {/* Connect wallet */}
<div className="font-semibold cursor-pointer text-2xl  text-white backdrop-blur-lg bg-green-600 bg-opacity-100 p-5 px-8 rounded-full">
     Connect Wallet
    </div>
    {/* Settings  */}
    <div className='font-semibold cursor-pointer text-4xl  text-white backdrop-blur-lg bg-[rgb(66,66,66)] bg-opacity-50 p-5 rounded-full'>
              <IoMdSettings />   
            </div>
</div>

      </div>

    {/* Game Options */}
    <div className={"grid grid-cols-2 gap-5"}>   
      <Link href={"/Arcade"} className="bg-[rgb(66,66,66)] hover:text-[rgb(66,66,66)] hover:bg-white text-5xl backdrop-blur-lg bg-opacity-80 p-5 h-56 px-8 py-1 rounded-lg flex items-center justify-center w-96 text-center border ">Arcade</Link>
   <Link href={"/PlayWithFriend"} className="bg-[rgb(66,66,66)] hover:text-[rgb(66,66,66)] hover:bg-white text-5xl backdrop-blur-lg bg-opacity-80 p-5 h-56 px-8 py-1 rounded-lg flex items-center justify-center w-96 text-center border ">Play with <br /> a friend</Link>
   <Link href={"/League"} className="bg-[rgb(66,66,66)] hover:text-[rgb(66,66,66)] hover:bg-white text-5xl backdrop-blur-lg bg-opacity-80 p-5 h-56 px-8 py-1 rounded-lg flex items-center justify-center w-96 text-center border ">League</Link>
   <Link href={"/Training"} className="bg-[rgb(66,66,66)] hover:text-[rgb(66,66,66)] hover:bg-white text-5xl backdrop-blur-lg bg-opacity-80 p-5 h-56 px-8 py-1 rounded-lg flex items-center justify-center w-96 text-center border ">Training</Link>
  

    </div>

    </main>
 
  );
}
