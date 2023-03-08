import React, { useState } from 'react'

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
          <button onClick={handleLeftRotate}>Left</button>
          <button onClick={handleRightRotate}>Right</button>
          <div className='experienceCarousel' style={{transform: `rotateY(${rotate}deg)`}}>
            <div className='exp'>SEIR</div>
            <div className='exp'>Research</div>
            <div className='exp'>School</div>
            <div className='exp'>Chef</div>
            <div className='exp'>Veteran</div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Experience;