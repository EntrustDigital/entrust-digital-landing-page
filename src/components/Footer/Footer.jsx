import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../data/data'
import { FullWhiteLogo } from '../../assets/logo'
import SocialMedia from '../SocialMedia/SocialMedia'


const Footer = () => {

    const footerContents = [
        {
            header: <FullWhiteLogo className={`h-10`}/>,
            contents: [
                <p className="mb-4 leading-relaxed">We provide you with our professional team which are adapt with all the latest technologies.</p>,
                <SocialMedia/>
            ]
        },
        // {
        //     header:'IT Services',
        //     contents: [
        //         <Link to="/" className="link-text link-text--red">IT Outsourcing</Link>,
        //     ]
        // },
        {
            header: 'Contacts',
            contents: data.contacts.detail.map((contact, index) => 
                <Link to='/' className="flex space-x-2 link-text link-text--orange" key={`footerContact${index}`}>
                    <span className="text-xl text-entrust-red mt-0.5">{contact.icon}</span>
                    <span>{contact.title}</span>
                </Link>
            )
        },
        
    ]

    return (
        <footer className="flex flex-col text-white bg-entrust-blue">
            <div className="flex flex-col py-12 space-y-10 lg:py-20 responsive lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-10">
                {
                    footerContents.map((footerContent, index) => 
                        <div key={`footerContent${index}`} className="flex flex-col w-full lg:max-w-sm">
                            <div className="h-10 mb-4 lg:h-12">
                                {
                                    typeof footerContent.header === 'object' ? footerContent.header : <h3 className="text-2xl font-bold">{footerContent.header}</h3>
                                }
                            </div>
                            <div className="flex flex-col space-y-3 font-medium text-entrust-gray-200">
                                {footerContent.contents.map((contents, index) => <div key={`footerSubContent${index}`}>{contents}</div>)}
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="pb-6 responsive">
                <h2 className="text-sm lg:text-center">© 2021 Entrust Digital</h2>
            </div>
        </footer>
    )
}

export default Footer
