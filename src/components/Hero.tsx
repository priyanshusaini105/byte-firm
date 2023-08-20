"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {}

export const Hero: FC<Props> = () => {
  return (
    <section className="flex justify-between w-full flex-col md:flex-row">
      <div className="w-full p-4 text-white relative">
        <h1 className="text-4xl md:text-5xl block font-bold text-primary-800">
          Transforming <span className="text-accent-400">Ideas</span>
        </h1>
        <span className="text-lg text-primary-700">into </span>
        <h3 className="text-4xl md:text-5xl block relative md:left-0 font-bold text-accent-400">
          Reality.
        </h3>
        <p className="text-white relative text-md my-8 text-primary-600">
          <span className="text-lg font-bold text-800">
            "Your Dream Apps and Websites, Created by Experts."
          </span>
          <br /> Welcome to Byte Firm. We're your dedicated team of React and
          React Native developers, turning your concepts into stunning,
          functional apps and websites.
        </p>
        <Link
          href=""
          className="text-gray-50 bg-accent-400 p-3 rounded-lg m-4 self-center font-bold"
        >
          Request a Quote
        </Link>
      </div>
      <div className="md:w-full">
        <Lottie
          animationData={require("public/heroLottie.json")}
          className=""
        />
      </div>
    </section>
  );
};
