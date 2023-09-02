"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { usePathname } from "next/navigation";
import { Hamburgur } from ".";

export function Navbar() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isSlide, setIsSlide] = useState(true);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const handleScroll = () => {
    if (!navRef.current) return;
    if (window.scrollY < 130) {
      navRef.current.style.transform = `translateY(-${window.scrollY<2?0:68}px)`;
      navRef.current.classList.remove('shadow-md');
    } else {
      navRef.current.style.transform = `translateY(0px)`;
      navRef.current.classList.add('shadow-md');
    }
  };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleAsideChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAsideOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    if (isAsideOpen) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }, [isAsideOpen]);

  return (
      <nav
        className="navbar flex w-full justify-between w-full px-4 py-2 items-center md:px-6 top-0 bg-primary-50/40 z-50 fixed backdrop-blur-lg bg-blur duration-300 ease-in-out"
        ref={navRef}
      >
        {/* logo */}
        <Image src="/images/logo.png" width={200} height={100} alt="" />

        {/* for aisde nav */}
        <Hamburgur
          isAsideOpen={isAsideOpen}
          onChange={handleAsideChange}
          className="z-50 md:hidden"
        />
        <div
          className="w-[500vw] bg-black/40 fixed m-0 h-0 h-[500vh] bg-blur backdrop-blur-lg -translate-x-16 duration-300 ease-in-out"
          style={isAsideOpen ? { display: "flex" } : { display: "none" }}
          onClick={() => setIsAsideOpen(false)}
        />
        <aside
          className={`h-screen shadow-xl fixed w-72 fixed top-0 right-0 bg-primary-800 duration-300 ease-in-out items-center flex justify-center ${
            isAsideOpen ? " translate-x-0":' translate-x-72'
          }`}
        >
          <ul className="flex gap-6 flex-col">
            {navItems.map((item) => {
              const isActive = item.url === pathname;
              return (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className={`text-2xl duration-300 ease-in-out hover:tracking-wide inline-block ${
                      isActive
                        ? "text-accent-500 font-semibold hover:text-accent-700"
                        : "text-primary-500 hover:text-primary-400"
                    }`}
                  >
                    <span className="relative inline-block group ">
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 transform origin-left scale-x-0 group-hover:scale-x-100  transition-transform ${
                          isActive ? "scale-x-100" : ""
                        }`}
                      ></span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
        {/* long view for desktop */}
        <ul className="md:flex gap-5 hidden">
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
                  <span className="relative inline-block group ">
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 transform origin-left scale-x-0 group-hover:scale-x-100  transition-transform ${
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
