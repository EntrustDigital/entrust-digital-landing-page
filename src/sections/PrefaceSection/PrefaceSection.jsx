import React from 'react'
import Button from '../../components/Button/Button'
import { goToSection } from '../../customHooks/goToSection'

const PrefaceSection = () => {
    return (
        <section id="preface" className="general-spacing">
            <div className="flex flex-col items-center justify-center space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 xl:space-x-20 responsive">
                <div data-aos="zoom-in-right" className="object-cover object-center w-full overflow-hidden rounded-lg shadow-lg lg:w-2/5 lg:flex-shrink-0">
                    <img className="lg:hidden" src="/assets/img/preface/preface_sm.png" alt="" />
                    <img className="hidden lg:block" src="/assets/img/preface/preface_lg.png" alt="" />
                </div>
                <div data-aos="zoom-in-left" className="">
                    <div className="mb-8">
                        <div  className="flex items-center mb-2 space-x-2 font-semibold text-entrust-blue">
                            <div className="w-10 h-0.5 rounded-full bg-entrust-blue"></div>
                            <span className="text-sm text-entrust-blue md:text-base">PREFACE</span>
                        </div>
                        <h2 className="mb-4 text-2xl font-bold md:text-4xl lg:mb-6">IT Outsourcing Services</h2>
                        <div  data-aos="fade-up" className="flex flex-col mb-8 space-y-2 leading-relaxed opacity-90 md:mb-10 lg:mb-12">
                            <p>
                                The business approach to information technology has changed drastically in the last decade.
                                Both big companies and young startups reaching out for digital transformation solutions in order to keep up the rapidly-changing modern times.

                            </p>
                            <p>
                                <b>IT Outsourcing</b> Service are an efficient way to deliver IT solutions to any business to boost business perfomance.
                                Many of them use our services to access proffessionals with different expertise.
                            </p>

                        </div>
                    </div>
                    <Button  className="md:btn--base" buttonSize="md" buttonColor="red" onClick={()=>goToSection('#about')}>About Us</Button>
                </div>
            </div>
        </section>
    )
}

export default PrefaceSection
