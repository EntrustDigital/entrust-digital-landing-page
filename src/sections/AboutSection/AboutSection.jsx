import React, { useEffect } from 'react'
import Button from '../../components/Button/Button'
import { goToSection } from '../../customHooks/goToSection'
import './AboutSection.css'

const AboutSection = (props) => {
    useEffect(() => {
        if(window.innerWidth > 1024) {
            const aboutImage = document.querySelectorAll('.about-image--absolute')
            setInterval(() => {
                for (let i = 0; i < aboutImage.length; i++) {
                    aboutImage[i].classList.toggle('translate-x-10');                    
                    setTimeout(() => {
                        aboutImage[i].classList.toggle('scale-110'); 
                        setTimeout(() => {
                            aboutImage[i].classList.toggle('translate-x-20');        
                            setTimeout(() => {
                                aboutImage[i].classList.toggle('my-16');        
                            }, 1000);
                        }, 2000);       
                    }, 3000);            
                }
            }, 4000);
        }
    }, [])
    return (
        <section id="about" className="general-spacing">
            <div className="flex flex-col items-center space-y-10 lg:flex-row lg:space-x-10 xl:space-x-20 responsive">
                <div data-aos="zoom-in-right" className="relative w-full lg:h-full lg:w-2/5 lg:flex-shrink-0">
                    <img className={`about-image about-image--absolute z-10 -left-1/2 bottom-1/2 my-16  transform scale-110 translate-x-20`} src="/assets/img/about/about2.png" alt="" />
                    <img className={`about-image about-image--absolute -left-1/2 top-1/2 transform`} src="/assets/img/about/about3.png" alt="" />
                    <img className={`about-image z-20 lg:absolute lg:top-1/2 lg:-translate-y-1/2 transform `} src="/assets/img/about/about1.png" alt="" />
                </div>
                <div data-aos="zoom-in-left" className="">
                    <div className="mb-8">
                        <div  className="flex items-center mb-2 space-x-2 font-semibold text-entrust-blue">
                            <div className="w-10 h-0.5 rounded-full bg-entrust-blue"></div>
                            <span className="text-sm text-entrust-blue md:text-base">ABOUT US</span>
                        </div>
                        <h2 className="mb-4 text-2xl font-bold md:text-4xl">Entrust Digital Technology</h2>
                        <div className=" text-entrust-gray-800">
                            <p className="leading-loose">We provide you with our proffesional team which are adapt with all the latest technologies. Our services can assist you with quality IT talent to be your valuable solution.  Many of our clients needs to improve their IT team resources so they can reduce consuming-time and focus on its core business. </p>
                        </div>
                    </div>
                    <Button  className="md:btn--base" buttonSize="md" buttonColor="red" onClick={()=>goToSection('#reasons')}>Why Entrust</Button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
