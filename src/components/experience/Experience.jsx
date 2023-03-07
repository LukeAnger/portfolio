import React from 'react'

const Experience = ({styles = {}}) => {

  return (
    <>
      <div className='experience pa ' style={styles}>
        <div className='holoText experience-head' style={{animation: 'fadeIn 2s ease-in forwards 1s, holoText 5s infinite ease-in-out alternate'}}>Experience</div>

        <div>
          <div>SEIR</div>
          <div>Research</div>
          <div>School</div>
          <div>Chef</div>
          <div>Veteran</div>
        </div>
      </div>

    </>
  )
}

export default Experience;