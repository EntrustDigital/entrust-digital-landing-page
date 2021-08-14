import React from 'react'
import { data } from '../../data/data';

const WorkingProcessSection = () => {
    const { workingProcess } = data;
    return (
        <section id="working" className="overflow-y-hidden general-spacing">
            <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-12 xl:space-x-16 responsive ">
                <div data-aos="fade-right" className="flex flex-col items-start justify-center px-4 py-16 text-white rounded-lg lg:w-2/3 md:px-8 bg-gradient-to-b from-entrust-blue to-entrust-cyan lg:col-span-4 xl:py-24 md:rounded-2xl">
                    <h4 className="mb-2 md:mb-4">WORKING PROCESS</h4>
                    <h2 className="mb-6 text-2xl font-bold leading-normal xl:text-4xl xl:leading-normal">Our Working Process - How We Work For Our Customers</h2>
                    {/* <Button className="md:btn--base" buttonSize="md" buttonColor="red">Lorem Ipsum</Button> */}
                </div>
                <div className="flex flex-col w-full space-y-4 lg:justify-between">
                    {
                        workingProcess.map((process, index) => 
                            <div key={`wp${index}`} className="flex space-x-2">
                                <h3 data-aos="fade-up" className="flex-shrink-0 w-10 text-3xl font-bold text-center text-entrust-blue lg:text-5xl">{process.number}</h3>
                                <div className="flex flex-col space-y-1">
                                    <h4  data-aos="fade-up" className="text-xl font-bold lg:text-2xl">{process.title}</h4>
                                    <div className="flex flex-col space-y-2">
                                    {
                                        process.description.length > 1 ? (
                                            process.description.map((description, descIndex) => 
                                                <div data-aos="fade-up" key={`description${index}${descIndex}`} className="flex space-x-2">
                                                    <div className="">-</div>
                                                    <p className="leading-relaxed text-entrust-gray-700">{description}</p>    
                                                </div>
                                            )
                                        ) : (
                                            process.description.map((description, descIndex) => 
                                                <p data-aos="fade-up" key={`description${index}${descIndex}`} className="leading-relaxed text-entrust-gray-700">{description}</p>    
                                            )
                                        ) 
                                    }
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkingProcessSection
