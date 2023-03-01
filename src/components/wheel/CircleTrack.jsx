import React from 'react'

const CircleTrack = ({rotation}) => {
  return (

      <div className='circleContent' style={{transform: `translate(-50%, calc(50vh - 50%)) rotate(${rotation}deg)`}}>

      </div>

  )
}

export default CircleTrack;