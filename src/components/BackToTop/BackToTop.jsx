import React, { useEffect, useState }  from 'react'
import SimpleButton from '../Buttons/SimpleButton/SimpleButton';
import './BackToTop.css'

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false)
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }
  useEffect(() => {
    window.onscroll = function() {scrollFunction()}
    function scrollFunction() {
      if (document.body.scrollTop > window.innerHeight - 100 || document.documentElement.scrollTop > window.innerHeight - 100) {
        setBackToTop(true)
      } else {
        setBackToTop(false)
      }
    }
  }, [])
  return (
    <div id='backToTop' aria-label={backToTop}>
      <SimpleButton 
        buttonColor={'black'}
        buttonOnClick={topFunction}
      >
        BACK TO TOP
      </SimpleButton>
    </div>
  )
}

export default BackToTop