import React from 'react'
import { RiTimeLine, RiMapPin2Line, RiPhoneLine, RiMailLine } from 'react-icons/ri'
import LinkText from '../Links/LinkText'
import data from '../../utils/data'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigation = useNavigate()
  const contactIcons = ['P:', 'E:', 'A:', 'A:', 'O:']
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
          <div className="flex flex-col items-center lg:w-1/3">
            <div>
              <h4 className='mb-6 text-lg font-bold'>Links</h4>
              <div className="flex flex-col items-start space-y-4 text-sm font-bold uppercase">
              {data.links.map((link, idx) => (
                <div key={`link${idx}`} className={`link-text`} onClick={() => linkOnClickHandler(link.path)}>{link.name}</div>
              ))}
            </div>
          </div>
          </div>
          <div className="w-full lg:w-1/3">
            <h4 className='mb-8 text-lg font-bold'>Contact Info</h4>
            <section className="flex flex-col space-y-10 ">
              <div className="flex flex-col w-full">
                <h3 className='text-base font-medium'>Bandung office contact</h3>
                <p className='mt-6 space-y-4 text-sm opacity-80'>
                  <span>WA (+62) 821-1561-5619 / (+62) 857-9596-2340</span>
                  <span>info@entrustdigital.co.id</span>
                  <span>Jalan Ir. H. Juanda No.109, Dago, Bandung Regency, West Java 40132</span>
                  <span>Jl. Buah Batu No. 161, Turangga, Kec. Lengkong, Bandung, West Java 40264</span>
                  <span>Opening Hours: 09:00 - 18:00'</span>
                </p>
              </div>
              <div className="flex flex-col w-full">
                <h3 className='text-base font-medium'>Admin contact</h3>
                <p className='mt-6 space-y-4 text-sm opacity-80'>
                  <span>WA (+62) 857-2496-5213</span>
                  <span>admin@entrustdigital.co.id</span>
                </p>
              </div>
              <div className="flex flex-col w-full">
                <h3 className='text-base font-medium'>Talent Acquisition Manager contact</h3>
                <p className='mt-6 space-y-4 text-sm opacity-80'>
                  <span>WA (+62) 857-9596-2340</span>
                  <span>chandra.wijaya@entrustdigital.co.id</span>
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="py-10 space-y-5 text-sm border-t border-white border-opacity-20 opacity-80">
          © 2022 Entrust Digital, All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
