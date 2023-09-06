import Image from "next/image";
import React from "react";

type Testimonial = {
  id: string;
  name: string;
  img: string;
  desc: string;
  designation: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Saurabh Kumar",
    img: "https://avatars.githubusercontent.com/u/56189243?v=4",
    desc: "ByteFirm really helped us to build our website. They are very professional and delivered the project on time.",
    designation: "Founder, Wordcraft",
  },
];

export const Testimonials = () => {
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
        <span className="text-primary-400 mr-2 ">What our clients </span>
        <span className="text-accent-400">Said</span>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial: Testimonial) => (
            <div key={testimonial.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={testimonial.img}
                />
                <p className="leading-relaxed">{testimonial.desc}</p>
                <span className="inline-block h-1 w-10 rounded bg-accent-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {testimonial.name}
                </h2>
                <p className="text-gray-500">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
