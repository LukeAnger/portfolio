import React from 'react'
import {displayVariable, subscript, superscript, eq1, eq2, eq3, quad} from '../equations.js'

const NoQuestionMark = () => {

  const time = () => (
    <div className='hint1' style={{transform: 'translate(0px, -130px)'}}>This tells us we are solving for time</div>
  )
  const rest = () => (
    <div className='hint2' style={{transform: 'translate(100px, 0px)'}}>This tells us the initial velocity is 0 m/s</div>
  )
  const ground = () => (
    <div className='hint3' style={{transform: 'translate(200px, 0px)'}}>This tells us that the following m/s value is our final velocity</div>
  )


  return (
    <div className='fc solved' >

      <div className='ta-cen '>If you have your own problem you want solved,
      you can plug in the known variables to the left</div>
      <div className='ta-cen '>Then put a question mark ? in the variable you want to solve for and hit submit or press enter</div>
      <div className='ta-cen '>If you don't have your own problem then try the one below on your own before using the solver</div>
      <div className='ta-cen ' style={{fontSize: '0.95rem', fontStyle: 'italic', color: '#4f4f4f'}}><b>Find the <span className='hint ' style={{color: 'red'}}>time{time()}</span> it takes for the apple to fall if it drops from <span className='hint' style={{color: 'red'}}>rest{rest()}</span> and hits the <span className='hint' style={{color: 'red'}}>ground{ground()}</span> at 40 m/s </b></div>

    </div>
  )
}

export default NoQuestionMark