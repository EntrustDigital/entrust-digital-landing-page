import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import Button from '../Buttons/Button/Button'
import './Jumbotron.css'
import Fade from 'react-reveal/Fade';

function Jumbotron({data, alignItems, colorOverlay, height, buttonOnClick}) {

  const alignments = ['left', 'center', 'right']
  const colorOverlays = ['primary', 'white', 'none']
  const heights = ['screen', '3/4']
  
  const CHECK_ITEMS_ALIGNMENTS = alignments.find(x => x === alignItems) ? alignItems : alignments[0]
  const CHECK_COLOR_OVERLAY = colorOverlays.find(x => x === colorOverlay) ? colorOverlay : colorOverlays[0]
  const CHECK_BUTTON_COLOR = CHECK_COLOR_OVERLAY === 'white' ? 'primary' : 'white'
  const CHECK_HEIGHTS = heights.find(x => x === height) ? height : heights[0]

  return (
     <section id={data.id} className={`jumbotron jumbotron--${CHECK_HEIGHTS}`} aria-label={CHECK_COLOR_OVERLAY}>
      <Parallax speed={-10} className='jumbotron__img'>
        <img 
          src={data.image} 
          alt={data.image} 
        />
      </Parallax>
      <Fade bottom cascade>
        <div className="jumbotron__content responsive" aria-label={CHECK_ITEMS_ALIGNMENTS}>
          <h1 className="jumbotron__title">{data.title}</h1>
          <p className="jumbotron__subtitle">{data.subtitle}</p>
          {data.button ? (
            <div className="jumbotron__btn">
              <Button buttonColor={CHECK_BUTTON_COLOR} buttonOnClick={buttonOnClick}>
                {data.button}
              </Button>
            </div>
          ) : ''}
        </div>
      </Fade>
    </section>
  )
}

export default Jumbotron