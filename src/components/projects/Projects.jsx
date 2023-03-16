import React from 'react'

const Projects = ({styles = {}}) => {

  return (
    <>
      <div className='projects pa ' style={styles}>
        <h1 className='section-header holoText' style={{animation: 'fadeIn 0.5s ease-in forwards 0.5s, holoText 5s infinite ease-in-out alternate'}}>Projects</h1>
      </div>
    </>
  )
}

export default Projects;