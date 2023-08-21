
import Image from "next/image"

function Component(params: any) {
  return (
    <div className="w-[90vw] mx-auto h-[90vh] bg-primary-100 flex  relative shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-2xl overflow-hidden ">
      <div className="relative w-full bg-primary-400 h-full top-0 left-0  ">
        <Image src={params.image} layout="fill" alt="" />
      </div>

      <div className="bg-gradient-to-r from-white/0 via-primary-600/70 to-primary-800 w-[60%] absolute top-0 ml-[40%]  h-full text-right text-white font-bold text-5xl p-32 backdrop-blur-sm">
        ReactApp
        <div className="relative mt-20 text-xl font-normal w-[70%] ml-[30%] text-gray-200 text-right ">
          This is sample content that I Writing for my app .This is my project and i build it . This is sample content that I Writing for my app .This is my project and i build it
        </div>
        <div className="relative w-[40%] hover:invert bg-white text-black rounded-full h-[15%] mt-20 ml-[60%] px-2 py-0 flex shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  hover:shadow-[0_20px_50px_primary-100] font-semibold hover:font-extrabold">
          <div className="relative w-[30%] h-full  ">
            <Image src="/source_code.png" layout="fill" alt="" />
          </div>
          <div className="h-full w-[70%] relative text-left text-xl py-5 mx-auto   ">
            Source Code
          </div>
        </div>
      </div>
    </div>
  )
}

const portfolio = () => {
  return (
    <div className="w-full h-fit mt-28 flex flex-col gap-32 ">
      <div className="w-full h-32 text-center mt-20 gap-4  flex">
        <div className="w-[10%] h-full relative ml-[30%]">
          <Image src="/webdev.png" layout="fill" alt= ""/>
        </div>
        <div className="w-[60%] h-full text-left font-bold text-primary-500 relative py-10 text-6xl  ">
            Web Applications
        </div>
      </div>
      <div className="w-[90%] h-4 mx-auto -mt-20  bg-accent-200 rounded-xl  "></div>

      <Component image="/flipkartmern.png" />
      <Component image="/flipkartmern.png" />
      <div className="w-full h-32 text-center mt-20 gap-4  flex">
        <div className="w-[10%] h-full relative ml-[30%]">
          <Image src="/webdev.png" layout="fill" alt= ""/>
        </div>
        <div className="w-[60%] h-full text-left font-bold text-primary-500 relative py-10 text-6xl  ">
            App Applications
        </div>
      </div>
      <div className="w-[90%] h-4 mx-auto -mt-20  bg-blue-200 rounded-xl  "></div>
      <Component image="/flipkartmern.png" />
      <Component image="/flipkartmern.png" />
      <div className="w-full h-20 relative"></div>
    </div>
  )
}

export default portfolio