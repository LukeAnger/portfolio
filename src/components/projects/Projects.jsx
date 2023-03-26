import React, { useState } from 'react'
import Trippy from './Trippy.jsx'
import Syzygy from './Syzygy.jsx'
import Outwit from './Outwit.jsx'
import Daff from './Daff.jsx'
import { arrow } from './svgs.js'

const Projects = ({styles = {}}) => {
  const [rotate, setRotate] = useState(0)
  const [currentProject, setCurrentProject] = useState(1)


  const handleLeftRotate = () => {
    setRotate(rotate - 90)
    currentProject === 4 ? setCurrentProject(1) : setCurrentProject(currentProject + 1)
  }
  const handleRightRotate = () => {
    setRotate(rotate + 90)
    currentProject === 1 ? setCurrentProject(4) : setCurrentProject(currentProject - 1)
  }
  return (
    <>
      <div className='projects pa ' style={styles}>
        <h1 className='section-header holoText' style={{animation: 'fadeIn 0.5s ease-in forwards 0.5s, holoText 5s infinite ease-in-out alternate'}}>Projects</h1>

        <div className='projectsScene'>
          {arrow(handleLeftRotate, 'projectButtonLeft')}
          {arrow(handleRightRotate, 'projectButtonRight')}
          <div className='projectsCarousel' style={{transform: `rotateY(${rotate}deg)`}} draggable>
            <Trippy cur={currentProject} />
            <Syzygy cur={currentProject} />
            <Daff cur={currentProject} />
            <Outwit cur={currentProject} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects;