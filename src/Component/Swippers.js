import React from 'react'
import '../css/style.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Navigation} from 'swiper'
import 'swiper/css/navigation'


const Swippers = () => {
  return (
    <div>
      <Swiper
      modules={Navigation}
      navigation
      effect
      speed={800}
      slidesPerView={3}
      loop
      className='myswipers'>

        <SwiperSlide className='swiperSlides'>slide 1</SwiperSlide>
        
        <SwiperSlide className='swiperSlides'>slide2</SwiperSlide>
        
        <SwiperSlide className='swiperSlides'>slider3</SwiperSlide>
        
        <SwiperSlide className='swiperSlides'>slider4</SwiperSlide>
        <SwiperSlide className='swiperSlides'>slider5</SwiperSlide>
        <SwiperSlide className='swiperSlides'>slider6</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Swippers