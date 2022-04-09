import React from 'react'
import { Fade } from 'react-reveal'
import { Parallax } from 'react-scroll-parallax'
import Heading from './components/Heading/Heading'
import Layout from './components/Layout/Layout'
import TimelineSection from './components/Sections/TimelineSection/TimelineSection'
import { ABOUT_SCREEN_DATA } from './constants/dataContstants'

const About = () => {
  return (
    <Layout contact>
      <section id='about' className='w-full overflow-hidden'>
        <Fade bottom cascade>
          <div className="">
            <h1 className='pt-16 text-center heading responsive lg:pt-20 xl:pt-32'>About Us</h1>
          </div>
          <Fade bottom cascade>
          
          </Fade>
          <div className='flex flex-col py-20 space-y-20 2xl:py-32 md:flex-row-reverse md:space-y-0 md:responsive md:items-center'>
            <div className="flex flex-col responsive md:w-1/2 md:flex-shrink-0 md:ml-12 xl:ml-0 lg:w-5/12">
              <div className="">
                <Heading 
                  title={ABOUT_SCREEN_DATA.about.title}
                  subtitle={ABOUT_SCREEN_DATA.about.subtitle}
                />
              </div>
              <p>
                {ABOUT_SCREEN_DATA.about.description.map((abt, idx) => (
                  <span key={`abtDesc-${idx}`} className={idx === 0 ? 'font-semibold text-lg' : 'leading-relaxed'}>{abt}</span>
                ))}            
              </p>
            </div>
            <div className="flex-shrink-0 w-full pr-12 md:pr-0 lg:w-10/12 xl:mr-20">
              <div className="pt-[72%] relative overflow-hidden md:pt-[80%] lg:pt-[67%]">
                <Parallax speed={-8} className='absolute inset-0'>
                  <img className='object-cover object-center w-full h-full scale-125 lg:scale-105' src={ABOUT_SCREEN_DATA.about.image} alt="" />
                </Parallax>
              </div>
            </div>
          </div>
        </Fade>        
      </section>
      <TimelineSection/>
    </Layout>
  )
}

export default About