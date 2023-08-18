"use client"

import Image from 'next/image'
import { useState } from 'react'


export default function Navbar() {
  const [istoggle, settoggle] = useState(true)

  return (
    <html>
      <div className="navbar flex w-full ">
        <div className="logo m-10 w-16 h-16 bg-black">
          <Image src="/logo.png" width={100} height={100} alt="" />
        </div>

        <div className="items mt-12 mb-10 ml-[45%]   w-16">
          <div id='line' className='inline-flex flex-col gap-1' onClick={() => {
            settoggle(() => {
              return (
                !istoggle
              )
            })
            var line = document.getElementById("line")
            var line1 = document.getElementById("line1")
            var line2 = document.getElementById("line2")
            var line3 = document.getElementById("line3")
            // line?.classList.toggle("gap-1")
            line1?.classList.toggle("nav-line-1")
            line2?.classList.toggle("nav-line-2")
            line3?.classList.toggle("nav-line-2")
          }}>
            <div id='line1' className='nav-line' />
            <div id='line2' className='nav-line' />
            <div id='line3' className='nav-line' />
          </div>
          <div>
            {istoggle
              ? <div></div> :
              <div className=' absolute z-10 left-0 flex flex-col w-[100vw] h-[70vh] mt-20 '>
                <div className='relative w-full h-full bg-black text-white mt-20 flex flex-col gap-20'>
                  <div className='h-10 text-4xl font-bold text-center '>Home</div>
                  <div className='h-10 text-4xl font-bold text-center '>About</div>
                  <div className='h-10 text-4xl font-bold text-center '>Work</div>
                  <div className='h-10 text-4xl font-bold text-center '>Contact</div>
                </div>
              </div>
            }
          </div>


        </div>
      </div>
    </html>
  )
}
