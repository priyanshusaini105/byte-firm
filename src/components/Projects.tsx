"use client";

import React from "react";
import Image from "next/image";

type Project={
  id:string,
  title:string,
  img:string,
  desc:string
  techs:string[],
  url?:string
}

const projects:Project[] = [
  {
    id: "1",
    title: "Wordcraft",
    img:'wordcraft.png',
    desc:'Wordcraft is a blog website where anyone can start posting their blogs by creating their own account.',
    techs:['Next Js','Firebase','React Js','Tailwind CSS'],
    url:'https://wordcraft-blog.vercel.app/'
  },
];

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
          {projects.map((project) => (
            <div key={project.id} className="relative w-56 h-[300px] bg-[whitesmoke] shadow-xl flex items-center justify-center text-black rounded-[10px] book bg">
              

              <div className="cover absolute bg-[lightgray] w-full h-full cursor-pointer transition-all duration-500 shadow-xl flex items-center justify-center rounded-[10px] top-0 flex flex-col">
                <p>{project.title}</p>
                <Image
                 src={'/images/projects/'+project.img}
                 alt=''
                 width={280}
                 height={480}
                 className='w-full'
                 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
