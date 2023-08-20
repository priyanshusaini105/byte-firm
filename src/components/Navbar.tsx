"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      id: "1",
      label: "Home",
      url: "/",
    },
    {
      id: "2",
      label: "About",
      url: "/about",
    },
    {
      id: "3",
      label: "Work",
      url: "/work",
    },
    {
      id: "4",
      label: "Contact Us",
      url: "/contact",
    },
  ];

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
    var navbar = document.getElementById("navbar-col");
    navbar?.classList.toggle("navcol");
    // line?.classList.toggle("gap-1")
    if (navbar !== null) {
      // navbar.style.marginLeft = "-100vw";
      console.log("updated");
      // navbar.style.marginLeft = "0vw";
    }
    var line = document.getElementById("line");
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");

    line1?.classList.toggle("nav-line-1");
    line2?.classList.toggle("nav-line-2");
    line3?.classList.toggle("nav-line-2");
  };

  return (
    <nav className="navbar flex w-full justify-between w-full px-4 py-2 items-center md:px-6 sticky top-0 bg-primary-50/40 z-10 backdrop-blur-lg bg-blur">
      <div className="">
        <Image src="/logo.png" width={200} height={100} alt="" />
      </div>

      {/* hamburger */}
      <div className="items my-auto ml-[40%] md:hidden">
        <div
          id="line"
          className="relative z-20 inline-flex flex-col gap-1"
          onClick={handleToggleNav}
        >
          <div id="line1" className="nav-line" />
          <div id="line2" className="nav-line" />
          <div id="line3" className="nav-line" />
        </div>
      </div>

      <div className="transition-all md:hidden">
        <div className="h-full absolute w-[100vw] top-0 left-0 overflow-x-hidden ">
          <div
            id="navbar-col"
            className=" fixed z-10   transition-all flex flex-col w-[80vw] h-[100vh] mt-0 bg-primary-900 left-[100vw] top-24"
          >
            <div className="relative w-full h-full  text-white mt-20 flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = item.url === pathname;
                return (
                  <Link
                    href={item.url}
                    key={item.id}
                    className={`h-10 text-3xl ml-[4%] ${
                      isActive ? "text-accent-400" : "text-primary-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <ul className="flex gap-5">
        {navItems.map((item) => {
          const isActive = item.url === pathname;
          return (
            <li key={item.id}>
              <Link
                href={item.url}
                className={`text-xl duration-300 ease-in-out hover:tracking-wide inline-block ${
                  isActive
                    ? "text-accent-500 font-semibold hover:text-accent-700"
                    : "text-primary-600 hover:text-primary-800"
                }`}
              >
                <span className="relative inline-block">
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-1 bg-accent-500 transform origin-left scale-x-0 transition-transform ${
                      isActive ? "scale-x-100" : ""
                    }`}
                  ></span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
