import React from 'react'

const CircleTrack = ({rotation}) => {
  return (

      <div className='circleContent' style={{transform: `translate(calc(50vw - 50%), -50%) rotate(${rotation + 90}deg)`}}>

      </div>

  )
}

export default CircleTrack;