import React from 'react'

const Daff = ({cur}) => {

  const style = cur === 3 ? {transform: `rotateY(180deg) translateZ(241px) scaleY(1)`} : {transform: `rotateY(180deg) translateZ(241px) scaleY(0)`}

  return (
    <div className='project' style={style}>
      <div className='projectsContainer'>

        <h3>Daff</h3>

      </div>
    </div>
  )
}

export default Daff