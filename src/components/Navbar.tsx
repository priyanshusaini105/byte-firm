"use client"

import Image from 'next/image'
import { useState } from 'react'


export default function Navbar() {
  const [istoggle, settoggle] = useState(true)

  return (
    <html>
      <div className="navbar flex w-full   ">
        <div className='absolute top-0 left-0 flex  w-full px-6 py-4  h-24 bg-primary-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
          <div className='flex'>
            <div className="logo w-16 h-16 bg-primary-50 ">
              <Image src="/logo.png" width={80} height={80} alt="" />
            </div>
            <div className="mt-4 h-10 text-blue-800 text-3xl font-normal">Byte</div>
            <div className="mt-4 h-10 text-cyan-600 text-3xl font-normal">Firm</div>
          </div>

          <div className="items   my-auto ml-[40%]  w-16 md:hidden">
            <div id='line' className='relative z-20 inline-flex flex-col gap-1' onClick={async () => {
              await settoggle(() => {
                return (
                  !istoggle
                )
              })
              var navbar = document.getElementById("navbar-col")
              navbar?.classList.toggle("navcol")
              // line?.classList.toggle("gap-1")
              if (navbar !== null) {
                // navbar.style.marginLeft = "-100vw";
                console.log("updated")
                // navbar.style.marginLeft = "0vw";

              }
              var line = document.getElementById("line")
              var line1 = document.getElementById("line1")
              var line2 = document.getElementById("line2")
              var line3 = document.getElementById("line3")

              line1?.classList.toggle("nav-line-1")
              line2?.classList.toggle("nav-line-2")
              line3?.classList.toggle("nav-line-2")
            }}>
              <div id='line1' className='nav-line' />
              <div id='line2' className='nav-line' />
              <div id='line3' className='nav-line' />
            </div>
          </div>
          <div className='transition-all md:hidden'>


            <div className='h-full absolute w-[100vw] top-0 left-0 overflow-x-hidden '>

              <div id='navbar-col' className=' fixed z-10   transition-all flex flex-col w-[80vw] h-[100vh] mt-0 bg-primary-900 left-[100vw] top-24'>

                <div className='relative w-full h-full  text-white mt-20 flex flex-col gap-6'>
                  <div className='h-10 text-3xl  ml-10 mt-20'>Home</div>
                  <div className='h-10 text-3xl  ml-10 '>About</div>
                  <div className='h-10 text-3xl  ml-10 '>Work</div>
                  <div className='h-10 text-3xl  ml-10 '>Contact</div>
                </div>
              </div>
            </div>

          </div>
          <div className='max-md:hidden  w-[60%] lg:w-[50%]  ml-[10vw] lg:ml-[35vw] xl:ml-[45vw] pt-4 flex gap-4 '>
            <div className='h-10 text-3xl  ml-[4%]'>Home</div>
            <div className='h-10 text-3xl  ml-[4%] '>About</div>
            <div className='h-10 text-3xl  ml-[4%] '>Work</div>
            <div className='h-10 text-3xl  ml-[4%] '>Contact</div>
          </div>

        </div>
      </div>
    </html>
  )
}
