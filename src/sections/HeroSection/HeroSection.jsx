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
                    <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
                        <h2 className="mb-4 text-lg font-semibold text-white">ENTRUST DIGITAL</h2>
                        <h1  data-aos="fade-up" className="mb-6 text-4xl font-bold leading-tight text-white xl:mb-10lg:mb-8 md:text-5xl md:leading-tight xl:leading-tight xl:text-6xl"> The Best IT Outsourcing in Indonesia</h1>
                        <Button  data-aos="fade-up" className="md:btn--base" buttonSize="md" buttonColor="red" onClick={()=>goToSection('#preface')}>Read More</Button>
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
