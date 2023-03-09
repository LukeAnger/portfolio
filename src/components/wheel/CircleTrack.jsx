import React from 'react'
// box-shadow: 0px 0px 20px 5px #00f7ffc4
const CircleTrack = ({rotation, ele}) => {

  console.log('ELEMENT: ', ele)
  let color = ''
  if (ele === 1) {
    color = '#00f7ffc4';
  } else if (ele === 2) {
    color = 'rgb(0 255 196 / 56%)';
  } else if (ele === 3) {
    color = 'rgb(77 99 255 / 65%)';
  } else if (ele === 4) {
    color = 'rgb(203 102 255 / 55%)';
  }
  console.log('circle color: ', color = '#00f7ffc4')
  const styles={
      transform: `translate(calc(50vw - 50%), -50%) rotate(${rotation + 90}deg)`,
      boxShadow: `0px 0px 20px 5px ${color}`
  }
  return (
    <>
    <div className='circleContent' style={styles}>
    </div>

    </>


  )
}

export default CircleTrack;