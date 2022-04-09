import React from 'react'
import { HOME_SCREEN_DATA } from '../../../constants/dataContstants'
import Heading from '../../Heading/Heading'
import './ReasonSection.css'
import ListWithNumber from '../../Lists/ListWithNumber/ListWithNumber';
import Fade from 'react-reveal/Fade';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination } from 'swiper';


const ReasonSection = () => {
  const headingAlignments = [
    {
      screen: 0,
      align: 'left'
    },
    {
      screen: 768,
      align: 'center'
    },
  ]
  return (
    <section id='reasons' className='w-full py-20 2xl:py-32'>
      <Fade bottom cascade>
        <div className="w-full">
          <div className="mb-6 responsive md:mb-16">
            <Heading 
              title={HOME_SCREEN_DATA.reasons.title}
              subtitle={HOME_SCREEN_DATA.reasons.subtitle}
              headingAlignment={headingAlignments}
            />
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={true}
            modules={[Pagination]}
          >
            {HOME_SCREEN_DATA.reasons.reasonList.map((rsn) => (
              <SwiperSlide key={`reason${rsn.id}`} >
                <ListWithNumber data={rsn} number/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="responsive">
            <div className="flex-wrap hidden md:flex lg:hidden">
              {HOME_SCREEN_DATA.reasons.reasonList.map((rsn) => (
                <ListWithNumber key={`reason${rsn.id}`} data={rsn} width={'40%'} number/>
              ))}
            </div>
            <div className="flex-wrap justify-center hidden lg:flex">
              {HOME_SCREEN_DATA.reasons.reasonList.map((rsn) => (
                <ListWithNumber key={`reason${rsn.id}`} data={rsn} width={'33%'} number/>
              ))}
            </div>
          </div>
         
        </div>
      </Fade>
    </section>
  )
}

export default ReasonSection