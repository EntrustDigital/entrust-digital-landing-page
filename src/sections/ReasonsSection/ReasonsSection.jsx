import React from 'react'
import { data } from '../../data/data'


const ReasonsSection = () => {
    const { reasons } = data;

    return (
        <section id="reasons" className="overflow-y-hidden general-spacing bg-entrust-blue-lightest">
            <div className="grid gap-10 responsive ">
                <div data-aos="fade-up" className="flex flex-col items-center max-w-lg mx-auto mb-10 text-center">
                    <span className="mb-2 text-sm font-semibold text-entrust-blue md:text-base">WHY ENTRUST</span>
                    <h2 className="mb-2 text-2xl font-bold leading-normal md:mb-4 md:text-4xl md:leading-normal">Reasons to Choose Us as <br /> IT Outsourcing Partner</h2>
                    <div className="w-10 h-0.5 rounded-full bg-entrust-blue"></div>                   
                </div>
                <ul  className="flex flex-wrap items-center justify-center ">
                    {
                        reasons.map((reason, index) => 
                            <li data-aos="fade-up" key={`reason${index}`} className="">
                                <div className="flex items-center justify-center px-4 py-10 mb-4 transition duration-300 transform bg-white rounded-lg lg:h-96 lg:mb-8 lg:w-80 lg:mx-4 group hover:scale-105 lg:px-8 lg:py-16 md:rounded-2xl hover:shadow-xl">
                                    <div className="flex flex-col justify-center w-full">
                                        <img className="w-16 h-16 mb-4" src={reason.icon} alt={reason.icon} />
                                        <div className="">
                                            <h3 className="mb-2 text-xl font-bold link-text link-text--blue group-hover:text-entrust-blue">{reason.title}</h3>
                                            <p className="leading-relaxed text-entrust-gray-700">{reason.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>            
        </section>
    )
}

export default ReasonsSection
