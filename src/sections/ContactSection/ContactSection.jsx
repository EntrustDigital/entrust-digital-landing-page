import React from 'react'
import { IoCall, IoMail } from 'react-icons/io5'
import BlueBackgrounds from '../../components/Backgrounds/BlueBackgrounds'
import Button from '../../components/Button/Button'
import { goToSection } from '../../customHooks/goToSection'
import ContactHolder from './ContactHolder'

const ContactSection = () => {
    const contacts = [
        {
            title: 'CALL US',
            icon: <IoCall/>,
            type: 'call',
            subtitle: ['+6282115615619', '+6285795962340']
        },
        {
            title: 'EMAIL US',
            icon: <IoMail/>,
            type: 'mail',
            subtitle: ['info@entrustdigital.co.id']
        }
    ]

    return (
        <BlueBackgrounds id="contact">
            <div className="responsive">
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-20">
                    <div data-aos="fade-right" className="overflow-hidden rounded-lg shadow-2xl lg:col-span-5 md:rounded-2xl">
                        <img className="w-full lg:hidden" src="/assets/img/contact/contact-girl-sm.png" alt="" />
                        <img className="hidden w-full lg:block" src="/assets/img/contact/contact-girl-lg.png" alt="" />
                    </div>
                    <div  data-aos="zoom-in" className="flex flex-col items-center w-full max-w-lg mx-auto text-center text-white lg:col-span-7">
                        <h2   className="mb-4 text-3xl font-bold md:text-4xl md:leading-tight xl:text-5xl xl:leading-tight">Have an Idea or Project?</h2>
                        <p   className="mb-4 leading-relaxed text-entrust-gray-200 md:mb-8 ">Call or send us an email to schedule an appointment. Our representative will reply you shortly.</p>
                        <div className="flex flex-col mb-10 space-y-4 lg:mb-12">
                            <div className=""  >
                                <ContactHolder contact={contacts[0]}/>
                            </div>
                            <p>or</p>
                            <div className=""  >
                                <ContactHolder contact={contacts[1]}/>
                            </div>                            
                        </div>
                        <div className="">
                            <Button  className="md:btn--base" buttonSize="md" buttonColor="red" onClick={()=>goToSection('#working')}>See How It Works</Button>
                        </div>
                    </div>
                </div>
            </div>
        </BlueBackgrounds>
    )
}

export default ContactSection
