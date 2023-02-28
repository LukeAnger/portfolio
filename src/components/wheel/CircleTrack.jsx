import React from 'react'
import Skills from './Skills.jsx'

const CircleTrack = ({rotation}) => {
  return (

      <div className='circleContent' style={{transform: `translate(-50%, calc(50vh - 50%)) rotate(${rotation}deg)`}}>

        <Skills />

        </div>

  )
}

export default CircleTrack;