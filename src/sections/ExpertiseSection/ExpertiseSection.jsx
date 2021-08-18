import React from 'react'
import { data } from '../../data/data'

const ExpertiseSection = () => {
    const { expertise } = data
    return (
        <section className="general-spacing">
            <div className="flex flex-col responsive">
                <div data-aos="fade-up" className="flex flex-col items-center max-w-lg mx-auto mb-10 text-center">
                    <h2 className="mb-2 text-2xl font-bold leading-normal md:mb-4 md:text-4xl md:leading-normal">Our Expertise</h2>
                    <div className="w-10 h-0.5 rounded-full bg-entrust-blue"></div>                   
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <ul className="grid w-full max-w-3xl grid-cols-3 gap-5 mb-10 lg:gap-10 md:grid-cols-5">
                        {
                            expertise.map((expertise, index) =>
                                <li data-aos="zoom-in" key={`expertise${index}`} className="relative">
                                    <div className="relative flex flex-col items-center justify-center w-full space-y-2 font-medium text-center transition duration-200 transform bg-white overflow-semibold group">
                                        <img src={expertise.image} className="flex-shrink-0 w-20 h-20" alt="" />
                                        <p>{expertise.title}</p>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <p className="text-lg font-semibold lg:text-xl xl:text-2xl">...and many more</p>
                </div>
            </div>
        </section>
    )
}

export default ExpertiseSection
