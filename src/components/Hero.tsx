"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {}

export const Hero: FC<Props> = () => {
  return (
    <section className="flex justify-between w-full flex-wrap flex-col-reverse lg:flex-row">
      <div className="w-full p-10 bg-opacity-30 shadow-md backdrop-blur-md h-screen text-white relative">
        <h1 className="text-5xl block">Transforming Ideas</h1>{" "}
        <span className="text-lg">into </span>{" "}
        {/* divider */}
        <div className=" z-50 -rotate-[24deg] absolute py-3 bg-primary-900 top-32 md:hidden">
          <div className="w-48 bg-white w-full bg-white h-1" />
        </div>
        <h3 className="text-5xl block relative left-11 md:left-0">Reality.</h3> 
        <p className="text-white relative text-lg my-8"><span className='text-xl'>"Your
        Dream Apps and Websites, Created by
          Experts."</span> <br/> Welcome to Byte Firm. We're your dedicated team of React
          and React Native developers, turning your concepts into stunning,
          functional apps and websites.
        </p>
        <Link href="" className='text-gray-900 bg-accent-400 p-3 rounded-lg m-4 self-center font-bold'>Request a Quote</Link>
      </div>
      <div className="w-1/2 p-4">
        {/* <Lottie
          animationData={require("public/heroLottie.json")}
          style={{ width: "80%", height: "80%" }}
        /> */}
      </div>
    </section>
  );
};
