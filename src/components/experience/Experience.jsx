import React, { useState } from 'react'
import SEIR from './SEIR.jsx'
import Loadmaster from './Loadmaster.jsx'
import Chef from './Chef.jsx'
import Research from './Research.jsx'
import Tutor from './Tutor.jsx'

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
        <div className='holoText experience-head' style={{animation: 'fadeIn 2s ease-in forwards 1s, holoText 5s infinite ease-in-out alternate'}}>Experience</div>

        <div className='experienceScene'>
          <button className='pa' style={{zIndex: '1', top: '50%', left: '-5%'}} onClick={handleLeftRotate}>Left</button>
          <button className='pa' style={{zIndex: '1', top: '50%', right: '-5%'}} onClick={handleRightRotate}>Right</button>
          <div className='experienceCarousel' style={{transform: `rotateY(${rotate}deg)`}}>
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