"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import React, { FC } from "react";
const Fade = require("react-reveal/Fade");

interface Props {}

export const Hero: FC<Props> = () => {
  return (
    <section className="flex justify-between w-full flex-col md:flex-row md:p-12 p-8 mt-16 bg-primary-50">
      <Fade top>
        <div className="w-full p-4 text-white relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl block font-bold text-primary-700 font-display">
            Transforming <span className="text-accent-400">Ideas</span>
          </h1>
          <span className="text-lg md:text-xl text-primary-700">into </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl block relative md:left-0 font-bold text-accent-400 font-display">
            Reality.
          </h3>
          <p className="relative text-md my-8 text-primary-600 md:pr-12 text-justify">
            <span className="text-lg font-bold text-800  font-display">
              "Your Dream Apps and Websites, Created by Experts."
            </span>
            <br /> Welcome to Byte Firm. We're your dedicated team of React and
            React Native developers, turning your concepts into stunning,
            functional apps and websites.
          </p>

          {/* cto button */}
          <Link href="/contact" className="btn">
            Request a Quote
          </Link>
        </div>

        <div className="w-full">
          <Lottie
            animationData={require("public/lottie/heroLottie.json")}
            className=""
          />
        </div>
      </Fade>
    </section>
  );
};
