import React from 'react'
import BlueBackgrounds from '../../components/Backgrounds/BlueBackgrounds';
import { data } from '../../data/data'

const ClientsSection = () => {
    const {clients} = data;
    return (
        <BlueBackgrounds>
            <div className="flex flex-col responsive">
                <div data-aos="fade-up" className="flex flex-col items-center max-w-lg mx-auto mb-10 text-center">
                    <h2 className="mb-2 text-2xl font-bold leading-normal text-white md:mb-4 md:text-4xl md:leading-normal">Our Clients</h2>
                    <div className="w-10 h-0.5 rounded-full bg-entrust-red"></div>                   
                </div>
                <div className="flex items-center justify-center">
                    <ul className="grid w-full max-w-3xl grid-cols-3 gap-5 md:grid-cols-4">
                        {
                            clients.map((client, index) =>
                                <li data-aos="zoom-in" key={`client${index}`} className="relative">
                                    <div className="relative flex justify-center w-full overflow-hidden transition duration-200 transform shadow-md group rounded-2xl hover:shadow-lg hover:scale-105">
                                        <div className="absolute inset-0 transition duration-300 bg-black mix-blend-color group-hover:bg-opacity-0"></div>
                                        <img src={client.image} className="w-full " alt="" />
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </BlueBackgrounds>
    )
}

export default ClientsSection
