import React from 'react'
import Skills from './Skills.jsx'

const loadStyle={animation: 'fadeIn 0.5s ease-in forwards 4s, rotate360 16s linear infinite 4.5s'}
const scrollStyle={animation: 'fadeIn 0.5s ease-in forwards 1s'}
const Title = ({ele}) => {

  if (ele === 0) {
    return(
      <>
        <div className='title pa '>
          <div>

          <h1 className='holoText title-load' style={{animation: 'fadeIn 2s ease-in forwards 4s, holoText 5s infinite ease-in-out alternate'}}>Luke Anger</h1>
          <h4 style={{animation: 'fadeIn 2s ease-in forwards 4s'}} >Software Engineer</h4>

          </div>

          <Skills styles={loadStyle}/>

        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='title pa '>

          <div>

          <h1 className='holoText ' style={{animation: 'fadeIn 2s ease-in forwards 1s, holoText 5s infinite ease-in-out alternate'}}>Luke Anger</h1>
          <h4 style={{animation: 'fadeIn 2s ease-in forwards 1s'}}>Software Engineer</h4>

          </div>

          <Skills  styles={scrollStyle}/>
        </div>
      </>
    )
  }

}

export default Title;