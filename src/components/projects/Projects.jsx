import React, { useState } from 'react'
import Trippy from './Trippy.jsx'
import Syzygy from './Syzygy.jsx'
import Outwit from './Outwit.jsx'
import Daff from './Daff.jsx'
import { arrow } from './svgs.js'

const Projects = ({styles = {}}) => {
  const [rotate, setRotate] = useState(0)
  const handleLeftRotate = () => {
    setRotate(rotate - 72)
  }
  const handleRightRotate = () => {
    setRotate(rotate + 72)
  }
  return (
    <>
      <div className='projects pa ' style={styles}>
        <h1 className='section-header holoText' style={{animation: 'fadeIn 0.5s ease-in forwards 0.5s, holoText 5s infinite ease-in-out alternate'}}>Projects</h1>

        <div className='experienceScene'>
          {arrow(handleLeftRotate, 'expButtonLeft')}
          {arrow(handleRightRotate, 'expButtonRight')}
          <div className='experienceCarousel' style={{transform: `rotateY(${rotate}deg)`}} draggable>
            <Trippy />
            <Syzygy />
            <Daff />
            <Outwit />
            <Daff />
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects;