import Image from 'next/image';
import React from 'react'

type TeamMember = {
    id: string;
    name: string;
    img: string;
    designation: string;
    about: string;
};

const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Saurabh Kumar",
        img: "https://avatars.githubusercontent.com/u/56189243?v=4",
        designation: "Founder, ByteFirm",
        about: "Saurabh is a full stack developer and has experience of 2 years in web development. He is a tech enthusiast and loves to learn new technologies.",
    },
    {
        id: "2",
        name: "Saurabh Kumar",
        img: "https://avatars.githubusercontent.com/u/56189243?v=4",
        designation: "Founder, ByteFirm",
        about: "Saurabh is a full stack developer and has experience of 2 years in web development. He is a tech enthusiast and loves to learn new technologies.",
    },
]
        

export const OurTeam = () => {

  return (
    <section className="text-gray-600 my-12">
        <div className="w-full h-5 flex justify-center font-bold p-4 text-4xl gap-2 items-end">
            <Image
            src="/icons/project-48.png"
            width={48}
            height={48}
            alt="Projects"
            className="inline-block w-12 h-12"
            />
            <h1 className="inline-block">Our Team</h1>
        </div>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {teamMembers.map((teamMember: TeamMember) => (
                    <div key={teamMember.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img
                            alt="testimonial"
                            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                            src={teamMember.img}
                            />
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                            {teamMember.name}
                            </h2>
                            <p className="text-gray-500">{teamMember.designation}</p>
                            <p className="text-gray-500">{teamMember.about}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
