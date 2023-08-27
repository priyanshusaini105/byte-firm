import Image from "next/image"

export const Services = () => {
    return (
        <div>
            <div className="h-[100vh] w-full bg-primary-50 mt-20">
                <div className="heading w-[40%] mx-auto h-fit  flex flex-col gap-y-2 py-14 ">
                    <div className="w-[80%] mx-auto text-base text-center font-body">
                        Let's Know about our services
                    </div>
                    <div className="w-full text-center flex flex-col text-5xl font-display">
                        <div className="text-primary-700">We Provide Our Client </div>
                        <div className="text-accent-700">Best Services</div>
                    </div>
                </div>
                <div className="h-fit w-[70%] max-sm:w-[80%] max-md:w-[60%] lg:w-[90%] xl:w-[70%] grid max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-3  mx-auto gap-x-5 gap-y-10 ">
                    <Item image="/icons/email-48.png"/>
                    <Item image=""/>
                    <Item image=""/>
                    <Item image=""/>
                    <Item image=""/>
                    <Item image=""/>
                </div>
            </div>
        </div>
    )
}
function Item(params: any) {
    return (
        <div className="w-full h-fit overflow-hidden rounded-2xl bg-primary-800 flex flex-col p-5">
            <div className="w-full h-20 p-1 pl-4 overflow-hidden">
                <div className="w-[25%] h-full bg-accent-500 rounded-2xl overflow-hidden ">
                    <div className="h-[80%] w-[60%] mx-auto py-4 invert "> <Image src={params.image} width={100} height={100} alt="" /> </div>
                </div>
            </div>
            <div className="text w-full px-5 pl-4">
                <div className="heading font-body text-2xl text-white pt-4 ">App Development</div>
                <div className="sub-heading font-body text-sm w-[90%] pr-10 py-5 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officia facilis est. </div>
            </div>
        </div>
    )
}

