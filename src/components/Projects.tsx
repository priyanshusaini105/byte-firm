"use client"

import React from 'react'
import Image from 'next/image'


function Item(params: any) {
    return (
        <div className='relative h-60 w-[100%] mx-auto shadow-[0px_20px_20px_10px_#00000024] rounded-lg  bg-yellow-600 overflow-hidden' onMouseEnter={() => {
            var item = document.getElementById(params.id)
            item?.classList.toggle("-mt-40")

        }
        } onMouseLeave={() => {
            var item = document.getElementById(params.id)
            item?.classList.toggle("-mt-40")
        }}>
            <div className='w-[100%] mx-auto h-[100%] bg-primary-200  rounded-t-lg shadow-[inset_-12px_-8px_40px_#46464620] p-10'  >
                <Image src={params.image} quality={100} layout="fill" alt="" />
                <div className='w-[90%] h-[90%] bg-black'>g</div>

            </div>
            <div id={params.id} className='relative w-[100%] mx-auto h-12 py-3 text-white opacity-95 text-xl text-center  transition-all   bg-accent-500 shadow-[inset_-12px_-8px_40px_#46464620]] ' >
                {params.name}
            </div>
            <div className="relative w-full h-full bg-white text-primary-900 justify-center text-left opacity-95 px-8 py-5 text-xl shadow-[inset_-12px_-8px_40px_#46464620] ">
                {params.text}
                This is the sample text of the project that i Made years ago.
            </div>
        </div>
    )
}

export function Projects() {
    return (
        <div>
            <div className="w-[100vw] h-fit py-20 mt-40 bg-primary-800 text-gray-600 flex flex-col gap-20 ">
                <div className='w-full h-5 flex justify-center font-bold p-4 text-4xl '>
                    <div className='text-primary-500 mr-2 '>
                        Projects
                    </div>
                    <div className='text-accent-500'>
                        Made
                    </div>
                </div>
                <div className='w-[90%] mx-auto rounded-lg bg-accent-500 h-4 shadow-2xl shadow-blue-500/20 ' >

                </div>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 w-[60%] mx-auto'>


                    <Item image="/flipkartmern.png" name="Next JS app" id="info1" />
                    <Item image="/flipkartmern.png" name="Next JS app" id="info2" />
                    <Item image="/flipkartmern.png" name="Next JS app" id="info3" />
                    <Item image="/flipkartmern.png" name="Next JS app" id="info4" />
                    <Item image="/flipkartmern.png" name="Next JS app" id="info6" />
                    <Item image="/flipkartmern.png" name="Next JS app" id="info5" />
                </div>
            </div>
        </div>
    )
}
