import React from 'react'
import { IoChevronDownCircleOutline } from 'react-icons/io5'
import BlueBackgrounds from '../../components/Backgrounds/BlueBackgrounds'
import Button from '../../components/Button/Button'
import { goToSection } from '../../customHooks/goToSection'

const HeroSection = () => {

    return (
        <BlueBackgrounds id="home">
            <div className="">
                <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10 xl:space-x-20 responsive ">
                    <div className="flex flex-col items-start justify-center">
                        <h1  data-aos="fade-up" className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl md:leading-tight xl:leading-tight xl:text-6xl"> IT Outsourcing Services</h1>
                        <div  data-aos="fade-up" className="flex flex-col mb-8 space-y-2 leading-relaxed text-white opacity-90 md:mb-10 lg:mb-12 xl:mb-16 md:text-lg md:leading-relaxed lg:text-lg lg:leading-relaxed">
                            <p>
                                The business approach to information technology has changed drastically in the last decade.
                                Both big companies and young startups reaching out for digital transformation solutions in order to keep up the rapidly-changing modern times.

                            </p>
                            <p>
                                <b>IT Outsourcing</b> Service are an efficient way to deliver IT solutions to any business to boost business perfomance.
                                Many of them use our services to access proffessionals with different expertise.
                            </p>

                        </div>
                        <Button  data-aos="fade-up" className="md:btn--base" buttonSize="md" buttonColor="red" onClick={()=>goToSection('#about')}>Find Out More</Button>
                    </div>
                    <div  data-aos="fade-up" className="hidden max-w-md overflow-hidden rounded-lg shadow-2xl lg:block md:rounded-2xl lg:w-1/2 lg:flex-shrink-0">
                        <img className="object-cover object-center w-full h-full lg:hidden" src="/assets/img/hero/hero1.png" alt="" />
                        <img className="hidden object-cover object-center w-full h-full lg:block" src="/assets/img/hero/hero2.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="absolute transform -translate-x-1/2 bottom-4 left-1/2">
                <div className="text-2xl text-white md:text-3xl lg:text-4xl animate-bounce">
                    <IoChevronDownCircleOutline/>
                </div>
            </div>
        </BlueBackgrounds>
    )
}

export default HeroSection
