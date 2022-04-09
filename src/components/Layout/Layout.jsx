import React, {useEffect, useState} from 'react'
import { HOME_SCREEN_DATA } from '../../constants/dataContstants'
import data from '../../utils/data'
import BackToTop from '../BackToTop/BackToTop'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Jumbotron from '../Jumbotron/Jumbotron'

const Layout = ({contact, children}) => {
  useEffect(() => {    
    window.history.scrollRestoration = 'manual'
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [])

  return (
    <>
      <Header/>
      <BackToTop/>
      <main className='w-full mt-16 overflow-x-hidden lg:mt-20'>
        {children}
        {contact ? (
          <Jumbotron 
            id='workflow-jumbotron'
            data={data.jumbotron.contact}
            alignItems={'center'}
            colorOverlay={'white'}
            height={'3/4'}
            buttonOnClick={() => navigation('/contact')}
          />
        ) : ''}
      </main>
      <Footer/>
    </>
  )
}

export default Layout