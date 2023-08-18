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
          {istoggle
            ? <div className='flex flex-col gap-2' onClick={() => {
              settoggle(false)
            }}>
              <div className='nav-line' />
              <div className='nav-line' />
              <div className='nav-line' />
            </div> :
            <div className=' absolute top-0 left-0 flex flex-col w-[100vw] h-[100vh]  '>
              <div className='flex flex-col relative mt-16 ml-[80vw]  h-16 w-16 ' onClick={() => {
                settoggle(true)
              }}>
                <div className='nav-line-2' />
                <div className='nav-line-1' />
              </div>
              <div className='relative w-full h-[70vh] bg-black text-white mt-20 flex flex-col gap-20'> 
                  <div className='h-10 text-4xl font-bold text-center '>Home</div>
                  <div className='h-10 text-4xl font-bold text-center '>About</div>
                  <div className='h-10 text-4xl font-bold text-center '>Work</div>
                  <div className='h-10 text-4xl font-bold text-center '>Contact</div>
              </div>
            </div>
          }

        </div>
      </div>
    </html>
  )
}
