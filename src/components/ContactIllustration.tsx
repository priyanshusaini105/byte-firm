'use client'
import Lottie from 'lottie-react'
import React from 'react'

export const ContactIllustration = () => {
  return (
    <Lottie
            animationData={require("public/lottie/contactUs.json")}
            className="absolute inset-0 w-full h-full"
          />
  )
}
