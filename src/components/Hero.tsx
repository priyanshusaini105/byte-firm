'use client'
import Lottie from 'lottie-react'
import React, { FC } from 'react'

interface Props{

}

export const Hero:FC<Props> = () => {
  return (
    <div className='flex justify-between'>
      <div className=''>
        text
      </div>
      <div className='w-1/2'>
        <Lottie
          animationData={require('public/heroLottie.json')}
          style={{ width: '100%', height: '100%' }}
        />
        </div> 
    </div>
  )
}
