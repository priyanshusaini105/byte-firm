"use client";

import React from "react";
import Image from "next/image";

const projects=[{
  id:'22',
  
}]

function Item(params: any) {
  return (
    <div className="relative w-56 h-[300px] bg-[whitesmoke] shadow-[1px_1px_12px_#000] flex items-center justify-center text-black rounded-[10px] book">
      <p>Hello</p>
      <div className="cover absolute bg-[lightgray] w-full h-full cursor-pointer transition-all duration-[0.5s] origin-[0] shadow-[1px_1px_12px_#000] flex items-center justify-center rounded-[10px] top-0 ">
        <p>Hover Me</p>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div>
      <div className="w-[100vw] h-fit py-20 mt-40 bg-primary-800 text-gray-600 flex flex-col gap-20 ">
        <div className="w-full h-5 flex justify-center font-bold p-4 text-4xl gap-2 items-end">
          <span className="text-primary-400 mr-2 ">What We've </span>
          <span className="text-accent-400">Built</span>
          <Image
            src="/icons/project-48.png"
            width={48}
            height={48}
            alt="Projects"
            className="inline-block w-12 h-12"
          />
        </div>
        <div className="w-9/10 mx-auto rounded-lg bg-accent-500 h-4 shadow-2xl shadow-blue-500/20 "></div>
        <div className="flex flex-wrap gap-8 justify-center">
          <Item image="/flipkartmern.png" name="Next JS app" id="info1" />
        </div>
      </div>
    </div>
  );
}
