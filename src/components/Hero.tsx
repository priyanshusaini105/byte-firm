'use client'
import Lottie from 'lottie-react'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props{

}

export const Hero:FC<Props> = () => {
  return (
    <section className='flex justify-between '>
      <div className=''>
        <p>
        Transforming Ideas into Reality. Your Dream Apps and Websites, Created by Experts."
"Welcome to Byte Firm. We're your dedicated team of React and React Native developers, turning your concepts into stunning, functional apps and websites.
          </p>
          <Link href=''>Request a Quote</Link>
          
      </div>
      <div className='w-1/2'>
        <Lottie
          animationData={require('public/heroLottie.json')}
          style={{ width: '100%', height: '100%' }}
        />
        </div> 
    </section>
  )
}
