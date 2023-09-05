"use client";

import React from "react";
import Image from "next/image";
import Popup from "reactjs-popup";

type Project = {
  id: string;
  title: string;
  img: string;
  desc: string;
  techs: string[];
  url?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Wordcraft",
    img: "wordcraft.png",
    desc: "Wordcraft is a blog website where anyone can start posting their blogs by creating their own account.",
    techs: ["Next Js", "Firebase", "React Js", "Tailwind CSS"],
    url: "https://wordcraft-blog.vercel.app/",
  },
  {
    id: "2",
    title:'KiddieMart'
  }
];

export function Projects() {
  return (
    <div className="w-screen h-fit py-20 mt-40 bg-primary-800 text-gray-600 flex flex-col gap-20 ">
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
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-56 h-[300px] bg-[whitesmoke] shadow-xl flex items-center justify-center text-black rounded-[10px] book bg"
          >
            <div className="absolute top-0 left-0 w-9/10 h-full bg-[whitesmoke] bg-opacity-80 flex flex-col items-center justify-center gap-4 p-4 rounded-[10px] transition-all duration-500 opacity-0 hover:opacity-100 ml-4">
              <p className="text-xl font-bold font-display underline">
                {project.title}
              </p>
              <p className="text-sm text-gray-600">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <div
                    key={tech}
                    className="bg-accent-500 text-black px-2 py-1 rounded-md text-xs"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <Popup
                trigger={
                  <button className="bg-primary-500 text-white px-2 py-1 rounded-md text-sm">
                    Preview
                  </button>
                }
                modal
                lockScroll
                onOpen={() => document.getElementById("blur")?.classList.toggle("hidden")}
                onClose={() => document.getElementById("blur")?.classList.toggle("hidden")}
              >
                {(close: any) => {
                  return (
                    <>
                      <div className="w-[60vw] h-[60vh] flex items-center justify-center">
                        <button
                          className="cursor-pointer absolute block leading-5 text-2xl border px-[5px] py-0.5 rounded-[18px] border-solid border-primary-800 bg-primary-200 -right-2.5 -top-2.5"
                          onClick={close}
                        >
                          &times;
                        </button>
                        <Image
                          src={`/images/projects/${project.img}`}
                          width={500}
                          height={500}
                          alt={project.title}
                          className="rounded-lg border-2 border-accent-400 w-full"
                        />
                      </div>
                    </>
                  );
                }}
              </Popup>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-500 text-white px-2 py-1 rounded-md text-sm"
                >
                  Visit
                  <Image
                    src="/icons/send-64.png"
                    width={24}
                    height={24}
                    alt="External Link"
                    className="inline-block w-4 h-4 ml-1 my-auto brightness-0 invert"
                  />
                </a>
              )}
            </div>

            <div className="cover absolute bg-[lightgray] w-full h-full cursor-pointer transition-all duration-500 shadow-xl flex items-center justify-center rounded-[10px] top-0 flex flex-col">
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-2">
                <p className="text-xl font-bold font-display underline">
                  {project.title}
                </p>
                <Image
                  src={`/images/projects/${project.img}`}
                  width={200}
                  height={200}
                  alt={project.title}
                  className="rounded-lg border-2 border-accent-400 w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
