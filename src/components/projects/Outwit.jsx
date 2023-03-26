import React from 'react'
import Board from './outwit/Board.jsx'

const Outwit = ({cur}) => {

  const style = cur === 4 ? {transform: `rotateY(270deg) translateZ(241px) scaleY(1)`} : {transform: `rotateY(270deg) translateZ(241px) scaleY(0)`}
    console.log(cur, style)
    return (
      <div className='project' style={style}>
        <div className='projectsContainer'>

          <h3>Outwit</h3>

          <p>Outwit is a strategy board game I loved to play with my grandma when I was a kid. I couldn't find the game in my grandparents house so I decided to create and share it with everyone.</p>
          <Board />
          {/* <img src='assets\outwit.PNG' alt='outwit' className='outwitImg' /> */}

          <a href='https://www.lukeanger.com/outwit' target='_blank' rel='noopener noreferrer'>Check it out here!</a>

          <p>I am currently working on setting up multiplayer with socket.io and also building an AI model so you can play against the computer.</p>
        </div>
      </div>
    )
  }

export default Outwit