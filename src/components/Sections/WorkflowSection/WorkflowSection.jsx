import React from 'react'
import { HOME_SCREEN_DATA } from '../../../constants/dataContstants'
import Heading from '../../Heading/Heading'
import './WorkflowSection.css'
import ListWithNumber from '../../Lists/ListWithNumber/ListWithNumber';
import Fade from 'react-reveal/Fade';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination } from 'swiper';
import { Parallax } from 'react-scroll-parallax';

const WorkflowSection = () => {
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
    <section id='workflow' className='py-20 mt-20 overflow-hidden 2xl:py-32'>
      <Fade bottom cascade>
        <div className="mb-12 lg:mb-20 responsive">
          <Heading
            title={HOME_SCREEN_DATA.workflow.title}
            subtitle={HOME_SCREEN_DATA.workflow.subtitle}
            description={HOME_SCREEN_DATA.workflow.description}
            headingAlignment={headingAlignments}
          />
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          className={''}
          modules={[Pagination]}
        >
          {HOME_SCREEN_DATA.workflow.workflowList.map((wrk) => (
            <SwiperSlide key={`reason${wrk.id}`} >
              <div className="flex items-center md:responsive md:space-x-6">
                <ListWithNumber data={wrk} number/>
                <div className="hidden w-full md:flex md:py-12">
                  <div className="pt-[156%] relative w-full">
                    <img 
                      src={wrk.image} 
                      alt={wrk.image} 
                      className={`w-full absolute inset-0 h-full object-cover object-center`}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Fade bottom cascade>
          <div className="relative flex-col items-center hidden lg:flex responsive">
            <div className="absolute w-px h-full bg-etd-tertiary "></div>
            {HOME_SCREEN_DATA.workflow.workflowList.map((wrk) => (
              <div key={wrk.id} className="w-full r">
                <div key={`reason${wrk.id}`} className="relative flex items-center justify-between w-full">
                  <div className={`${wrk.id % 2 === 0 ? 'order-3 pl-10' : 'pr-10'} w-5/12 flex-shrink-0 xl:w-4/12`}>
                    <ListWithNumber data={wrk} number/>
                  </div>
                  <div className={`${wrk.id % 2 === 0 ? 'order-2 ' : ''} flex justify-center items-center w-full`}>
                    <div className="w-3 h-3 rounded-full bg-etd-primary "></div>
                  </div>
                    <div className="flex flex-shrink-0 w-5/12 py-16 xl:w-4/12 lg:py-20">
                      <div className="pt-[156%] relative w-full overflow-hidden">
                        <Parallax speed={-8} className='absolute inset-0 w-full h-full'>
                          <img 
                            src={wrk.image} 
                            alt={wrk.image} 
                            className={`w-full  h-full object-cover object-center scale-105 transform`}
                          />
                        </Parallax>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </Fade>
    </section>
  )
}

export default WorkflowSection