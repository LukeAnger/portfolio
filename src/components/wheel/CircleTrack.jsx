import React from 'react'
// box-shadow: 0px 0px 20px 5px #00f7ffc4
const CircleTrack = ({rotation, ele}) => {

  const circle = (color = '#00f7ffc4') => (
    <div className='circleContent' style={{transform: `translate(calc(50vw - 50%), -50%) rotate(${rotation + 90}deg)`, boxShadow: `0px 0px 20px 5px ${color}`}}>

    </div>
  )
  return (
    <>
      {ele === 0 || ele === 1 ? circle() : null}
      {ele === 2 ? circle('rgb(0 255 196 / 56%)') : null}
      {ele === 3 ? circle('rgb(77 99 255 / 65%)') : null}
      {ele === 4 ? circle('rgb(203 102 255 / 55%)') : null}

    </>


  )
}

export default CircleTrack;