import React from 'react'
import SyzygyLite from './syzygy/SyzygyLite.jsx'

const Syzygy = ({cur}) => {

  const style = cur === 2 ? {transform: `rotateY(90deg) translateZ(241px) scaleY(1)`} : {transform: `rotateY(90deg) translateZ(241px) scaleY(0)`}
  console.log('syzygy', cur, style)
  return (
    <div className='project syzygy'  style={style}>
      <div className='projectsContainer'>

        <h3>Syzygy</h3>

        <p>Syzygy is a free fall kinematics app that utilized voice to text to allow users to input their data and receive a graph of their data.</p>

        <SyzygyLite />
      </div>


    </div>
  )
}

export default Syzygy