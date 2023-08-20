import React from 'react'
import Image from 'next/image'

function Item(params: any) {
    return (
        <div className='h-60 w-[100vw] '>
            <div className='w-[80vw] mx-auto h-44 bg-primary-200 mt-20 rounded-t-lg'>
                <Image src={params.image} width={100} height={100} alt="" />
            </div>
            <div className='relative w-[80vw] mx-auto h-14 py-3 bg-red-300  text-3xl text-center rounded-b-lg '>
                {params.name}
                g
            </div>
        </div>
    )
}

export function Projects() {
    return (
        <div>
            <div className="w-[100vw] h-[200vh] py-20 mt-40 bg-primary-800 ">
                <Item image="/logo.png" name="Next JS app"/>
            </div>
        </div>
    )
}
