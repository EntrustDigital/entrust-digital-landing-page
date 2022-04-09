import React, { useState } from 'react'
import { Fade } from 'react-reveal'
import Heading from './components/Heading/Heading'
import Input from './components/Input/Input'
import Layout from './components/Layout/Layout'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <Layout>
      <div className="overflow-hidden">
        <Fade bottom cascade>
          <div className="pt-20 responsive">
            <div className="">
              <Heading title={'Contact Us'} headingAlignment={'center'}/>
            </div>
          </div>
          <section className="flex flex-col py-20 space-y-10 responsive md:flex-row md:space-y-0 md:space-x-16 lg:justify-center">
            <div className="flex flex-col w-full xl:w-1/3">
              <h3 className='text-3xl font-medium xl:text-4xl'>Bandung office contact</h3>
              <p className='mt-4 text-sm lg:mt-6'>
                <span>WA (+62) 821-1561-5619 / (+62) 857-9596-2340</span>
                <span>info@entrustdigital.co.id</span>
                <span>Jalan Ir. H. Juanda No.109, Dago, Bandung Regency, West Java 40132</span>
                <span>Jl. Buah Batu No. 161, Turangga, Kec. Lengkong, Bandung, West Java 40264</span>
              </p>
            </div>
            <div className="flex flex-col w-full xl:w-1/3">
              <h3 className='text-3xl font-medium xl:text-4xl'>Procurement officer contact</h3>
              <p className='mt-4 text-sm lg:mt-6'>
                <span>WA (+62) 857-9596-2340</span>
                <span>hendra@entrustdigital.co.id</span>
              </p>
            </div>
          </section>
          <section className='flex flex-col pt-20 space-y-12 '>
            <div className="w-full pt-[40%] relative ">
              <iframe className="absolute inset-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.56132492195678!2d107.61245135238312!3d-6.892851944882981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e650d9e62bbd%3A0x65d8832776980880!2sJl.%20Dago%20No.109%2C%20Lb.%20Siliwangi%2C%20Kecamatan%20Coblong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040132!5e0!3m2!1sen!2sid!4v1649483733292!5m2!1sen!2sid" width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
        </Fade>
      </div>
    </Layout>
  )
}

export default Contact