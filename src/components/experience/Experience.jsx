import React, { useState } from 'react'
import SEIR from './SEIR.jsx'
import Loadmaster from './Loadmaster.jsx'
import Chef from './Chef.jsx'
import Research from './Research.jsx'
import Tutor from './Tutor.jsx'
import { arrow } from './svgs.js'

const Experience = ({styles = {}}) => {
  const [rotate, setRotate] = useState(0)
  const handleLeftRotate = () => {
    setRotate(rotate - 72)
  }
  const handleRightRotate = () => {
    setRotate(rotate + 72)
  }
  return (
    <>
      <div className='experience pa ' style={styles}>
        <div className='holoText experience-head' style={{animation: 'fadeIn 0.5s ease-in forwards 0.5s, holoText 5s infinite ease-in-out alternate'}}>Experience</div>

        <div className='experienceScene'>
          {arrow(handleLeftRotate, 'expButtonLeft')}
          {arrow(handleRightRotate, 'expButtonRight')}
          <div className='experienceCarousel' style={{transform: `rotateY(${rotate}deg)`}} draggable>
            <SEIR />
            <Loadmaster />
            <Chef />
            <Tutor />
            <Research />
          </div>
        </div>
      </div>

    </>
  )
}

export default Experience;