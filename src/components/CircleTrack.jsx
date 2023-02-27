import React from 'react'

const CircleTrack = ({rotation}) => {
  return (
    <>

      <div className='circleContent' style={{transform: `translate(-50%, calc(50vh - 50%)) rotate(${rotation}deg)`}}>

          {/* TESTING OUT SOME PATH ANIMATIONS */}
          {/* <svg className='testAnimateSVG' height="500" width="500">
            <circle cx="250" cy="250" r="250" stroke="#00f7ffc4" strokeWidth="0" fill="#00f7ffc4" />
          </svg>

          <svg className='testAnimateSVG' height="500" width="500">
            <circle cx="250" cy="250" r="250" stroke="#00f7ffc4" strokeWidth="0" fill="#00f7ffc4" />
          </svg>

          <svg className='testAnimateSVG' height="500" width="500">
            <circle cx="250" cy="250" r="250" stroke="#00f7ffc4" strokeWidth="0" fill="#00f7ffc4" />
          </svg>

          <svg className='testAnimateSVG' height="500" width="500">
            <circle cx="250" cy="250" r="250" stroke="#00f7ffc4" strokeWidth="0" fill="#00f7ffc4" />
          </svg> */}

        </div>
    </>
  )
}

export default CircleTrack;