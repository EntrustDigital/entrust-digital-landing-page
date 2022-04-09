import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../../utils/data'
import BackToTop from '../BackToTop/BackToTop'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Jumbotron from '../Jumbotron/Jumbotron'

const backup = console.warn;
console.warn = function filterWarnings(msg) {
  const supressedWarnings = [`Warning: Can't perform a React state update on an unmounted component.`, `componentWillReceiveProps`];
  if (!supressedWarnings.some(entry => msg.includes(entry))) {
    backup.apply(console, arguments);
  }
};

const Layout = ({contact, children}) => {
  const navigation = useNavigate()
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