import React, { useState } from 'react'
import SEIR from './SEIR.jsx'
import Loadmaster from './Loadmaster.jsx'
import Chef from './Chef.jsx'
import Research from './Research.jsx'
import Tutor from './Tutor.jsx'


const Experience = ({styles = {}}) => {

  return (
    <>
      <div className='experience pa ' style={styles}>
        <div className='holoText experience-head' style={{animation: 'fadeIn 0.5s ease-in forwards 0.5s, holoText 5s infinite ease-in-out alternate'}}>Experience</div>


      </div>

    </>
  )
}

export default Experience;