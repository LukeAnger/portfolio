import React from 'react'

const Trippy = ({cur}) => {

  const style = cur === 1 ? {transform: `rotateY(0deg) translateZ(241px) scaleY(1)`} : {transform: `rotateY(0deg) translateZ(241px) scaleY(0)`}

  return (
    <div className='project' style={style}>
      <div className='projectsContainer'>

        <h3>Trippy</h3>

      </div>
    </div>
  )
}

export default Trippy