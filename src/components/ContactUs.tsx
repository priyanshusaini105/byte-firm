"use client"
import sendMail from "@/actions/sendMail";
import { ContactFormValues } from "@/types";
import Lottie from "lottie-react";
import Image from "next/image";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {}


export const ContactUs: FC<Props> = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>();
    
    const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
        sendMail(data);
    };

  return (
    <section className="text-gray-600 body-font relative my-16 flex justify-center lg:px-32 bg-primary-100" id='contact'>
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap bg-white rounded-xl shadow-lg">
        <div className="lg:w-1/2 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Lottie
            animationData={require("public/lottie/contactUs.json")}
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-3xl mb-2 font-semibold font-display flex items-end gap-2">
            <Image src='/icons/contact-48.png' width={48} alt='contact' height={48} /> Get in <span className='text-accent-400'>Touch</span>
          </h2>
          <p className="leading-relaxed mb-6 text-gray-600">
            We'd Love to Hear from You
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm font-medium text-gray-600 mb-1 block flex items-end gap-2">
                <Image src='/icons/name-48.png'
                    className='grayscale opacity-50'
                    width={24}
                    height={24}
                    alt='name'
                    />
                Your Name
              </label>
              <input
                type="text"
                {...register("name", { 
                  required: true,
                  minLength: 3,
                  validate: value => value.trim() !== ""
                })}
                className={`w-full bg-white rounded-md border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300'} focus:border-primary-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out`}
                placeholder="Enter your Name"
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">Name is required and must be at least 3 characters</span>}
            </div>
            {/* email */}
            <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-700 flex items-end gap-2">
            <Image src='/icons/email-48.png'
                    className='grayscale opacity-50'
                    width={24}
                    height={24}
                    alt='email'
                    />
              Email
            </label>
            <input
              {...register("email",{ required: true,
                minLength: 3,
                validate: value => value.trim() !== ""})}
              name="email"
              placeholder='Enter your Email'
              className={`w-full bg-white rounded border shadow-inner ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300'} text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="relative mb-4">
            <label htmlFor="subject" className="leading-7 text-sm text-gray-700 flex items-end gap-2">
            <Image src='/icons/subject-48.png'
                    className='grayscale opacity-50'
                    width={24}
                    height={24}
                    alt='subject'
                    />
              Subject
            </label>
            <input
              {...register("subject", { 
                required: true,
                validate: value => value.trim() !== ""
              })}
              name="subject"
              placeholder='Subject'
              className={`w-full bg-white rounded border shadow-inner ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
            {errors.subject && <span className="text-red-500">Subject is required</span>}
          </div>

          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-700 flex items-end gap-2">
            <Image src='/icons/message-48.png'
                    className='grayscale opacity-50'
                    width={24}
                    height={24}
                    alt='message'
                    />
              Message

            </label>
            <textarea
              {...register("message", { 
                required: true,
                validate: value => value.trim() !== ""
              })}
              placeholder="Enter your Message"
              className={`w-full bg-white rounded border shadow-inner ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
              defaultValue={""}
            />
            {errors.message && <span className="text-red-500">Message is required</span>}
          </div>
            <button className="btn flex items-center gap-2 justify-center">
              Send Message
              <Image src='/icons/send-64.png'
                    className='brightness-0 invert'
                    width={24}
                    height={24}
                    alt='Send Message'
                />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
