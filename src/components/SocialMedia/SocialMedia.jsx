import React from 'react'
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import { FaFacebookF } from 'react-icons/fa'
import Button from '../Button/Button'

const SocialMedia = (props) => {
    const socialMedias = [
        {
            name: 'Facebook',
            icon: <FaFacebookF/>
        },
        {
            name: 'Instagram',
            icon: <IoLogoInstagram/>
        },
        {
            name: 'Twitter',
            icon: <IoLogoTwitter/>
        },
    ]
    return (
        <div className="flex items-center space-x-3">
            {
                socialMedias.map((socialMedia, index) => 
                    <Button key={`socialMedia${index}`} roundButton buttonColor="white" buttonSize="md">
                        <div className="text-xl text-entrust-gray-700">
                            {socialMedia.icon}
                        </div>
                    </Button>
                )
            }
        </div>
    )
}

export default SocialMedia
