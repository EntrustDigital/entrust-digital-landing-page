import React from 'react'
import { RiTimeLine, RiMapPin2Line, RiPhoneLine, RiMailLine } from 'react-icons/ri'
import LinkText from '../Links/LinkText'
import data from '../../utils/data'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigation = useNavigate()
  const contactIcons = ['P:', 'E:', 'O:', 'A:', 'A:']
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }
  const linkOnClickHandler = (path) => {
    if (window.location.pathname !== path) return navigation(path)
    topFunction()
  }
  return (
    <footer className='text-white bg-gradient-to-tr from-etd-primary to-etd-tertiary'>
      <div className="flex flex-col responsive">
        <div className="flex flex-col items-start py-12 space-y-12 lg:flex-row lg:space-y-0 lg:space-x-0 xl:py-20 lg:justify-between">
          <div className="flex flex-col space-y-6 lg:w-1/3">
            <div className="w-40">
              <img src={data.logo[1].image} alt="logo" />
            </div>
            <p>Indonesia’s IT Talent Provider and Software Development Services</p>
          </div>
          <div className="">
            <h4 className='mb-6 text-lg font-bold'>Links</h4>
            <div className="flex flex-col items-start space-y-4 text-sm font-bold uppercase">
            {data.links.map((link, idx) => (
              <div key={`link${idx}`} className={`link-text`} onClick={() => linkOnClickHandler(link.path)}>{link.name}</div>
            ))}
          </div>
          </div>
          <div className="w-full lg:w-1/3">
            <h4 className='mb-6 text-lg font-bold'>Contact Info</h4>
            <div className="flex flex-col space-y-4 font-normal">
              {data.contacts.map((contact, idx) => (
                  <div key={`contact${idx}`}className='flex space-x-2' onClick={() => linkOnClickHandler(contact.path)}>
                    <span className='flex items-center h-6 opacity-70'>
                      {contactIcons[idx]}
                    </span>
                    <span className="leading-normal tracking-normal opacity-100">
                      {contact.description}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="py-12 text-sm border-t border-white border-opacity-20 opacity-80">
          © 2022 Entrust Digital, All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
