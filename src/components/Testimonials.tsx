"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';

import { EffectCoverflow, Pagination } from 'swiper/modules';


export const Testimonials = () => {
  return (
    <section className="text-yellow-500 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap ">
          <Swiper
            spaceBetween={100}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              depth: 1000,
              slideShadows: true,
            }}
            
            pagination={{
              el: '.swiper-pagination',
        clickable: true
            }}
            slidesPerView={2.3}
            modules={[EffectCoverflow, Pagination]}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper: any) => console.log(swiper)}
          >
             <SwiperSlide>
              <div className="w-full h-full overflow-hidden ">
                <div className="h-full text-center bg-primary-800 p-4 rounded-xl ">
                  <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                  <p className="leading-relaxed text-white px-0 lg:px-6 md:px-2  ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                  <span className="inline-block h-1 w-10 rounded bg-primary-300 mt-6 mb-4"></span>
                  <h2 className="text-accent-400 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                  <p className="text-secondary-400">Senior Product Designer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full overflow-hidden ">
                <div className="h-full text-center bg-primary-800 p-4 rounded-xl ">
                  <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                  <p className="leading-relaxed text-white px-0 lg:px-6 md:px-2  ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                  <span className="inline-block h-1 w-10 rounded bg-primary-300 mt-6 mb-4"></span>
                  <h2 className="text-accent-400 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                  <p className="text-secondary-400">Senior Product Designer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full overflow-hidden ">
                <div className="h-full text-center bg-primary-800 p-4 rounded-xl ">
                  <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                  <p className="leading-relaxed text-white px-0 lg:px-6 md:px-2  ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                  <span className="inline-block h-1 w-10 rounded bg-primary-300 mt-6 mb-4"></span>
                  <h2 className="text-accent-400 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                  <p className="text-secondary-400">Senior Product Designer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full overflow-hidden ">
                <div className="h-full text-center bg-primary-800 p-4 rounded-xl ">
                  <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                  <p className="leading-relaxed text-white px-0 lg:px-6 md:px-2  ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                  <span className="inline-block h-1 w-10 rounded bg-primary-300 mt-6 mb-4"></span>
                  <h2 className="text-accent-400 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                  <p className="text-secondary-400">Senior Product Designer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full overflow-hidden ">
                <div className="h-full text-center bg-primary-800 p-4 rounded-xl ">
                  <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                  <p className="leading-relaxed text-white px-0 lg:px-6 md:px-2  ">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                  <span className="inline-block h-1 w-10 rounded bg-primary-300 mt-6 mb-4"></span>
                  <h2 className="text-accent-400 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                  <p className="text-secondary-400">Senior Product Designer</p>
                </div>
              </div>
            </SwiperSlide>
            ...
          </Swiper>


        </div>
      </div>
    </section>
  )
}