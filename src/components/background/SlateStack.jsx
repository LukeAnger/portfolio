import React from 'react'
import { circuitBoard1, circuit1, circuitBoard2, circuit2 } from './svgs.js'

const card1Circuit = () => (
  <>

  {/* <div className='node'></div>
  <div className='node'></div>
  <div className='node'></div>
  <div className='node'></div>
  <div className='node'></div>
  <div className='cable'></div>
  <div className='cable'></div>
  <div className='transistor'></div>
  <div className='transistor'></div> */}

  </>

)

const slideOut = (num) => (
  {
    transform: `translate(-60px, ${60 - 30*(num)}px) rotateX(60deg) rotateZ(45deg)`,
    boxShadow: '2px 2px 1px 1px green'
  }
);

const SlateStack = ({ele, navButtonHandler}) => {

  const highlight = {backgroundColor: '#ec6b6b'}
  return (
    <>
      <div className='stack'>
        {ele === 1 || ele === 0 ?
        <div className='card1 card' style={slideOut(1)}>{circuitBoard1()}{circuit1()}</div> : <div className='card1 card'>{circuitBoard1()}</div>}
        {ele === 2 ?
        <div className='card2 card' style={slideOut(2)}>{circuitBoard2()}{circuit2()}</div> :
        <div className='card2 card'>{circuitBoard2()}</div>}
        {ele === 3 ?
        <div className='card3 card' style={slideOut(3)}>{circuitBoard1()}{circuit1()}</div> :
        <div className='card3 card'>{circuitBoard1()}</div>}
        {ele === 4 ?
        <div className='card4 card' style={slideOut(4)}>{circuitBoard2()}{circuit2()}</div> :
        <div className='card4 card'>{circuitBoard2()}</div>
        }
        <div className='cardReader'>
          {ele === 4 ? <button onClick={() => navButtonHandler(4)}
          style={{transform: 'translate(-4px, 4px)', boxShadow: '4px -4px rgb(156 0 229)'}}>Contact</button> :
          <button onClick={() => navButtonHandler(4)}>Contact</button>}
          {ele === 3 ? <button onClick={() => navButtonHandler(3)}
          style={{transform: 'translate(-4px, 4px)', boxShadow: '4px -4px rgb(59 84 255)'}}>Projects</button> :
          <button onClick={() => navButtonHandler(3)}>Projects</button>}
          {ele === 2 ? <button onClick={() => navButtonHandler(2)}
          style={{transform: 'translate(-4px, 4px)', boxShadow: '4px -4px rgb(0 157 120)'}}>Experience</button> :
          <button onClick={() => navButtonHandler(2)}>Experience</button>}
          {ele === 1 || ele === 0 ? <button onClick={() => navButtonHandler(1)}
          style={{transform: 'translate(-4px, 4px)', boxShadow: '4px -4px rgb(0 187 193)'}}>About</button> :
          <button onClick={() => navButtonHandler(1)}>About</button>}
        </div>

      </div>
    </>
  )
}

export default SlateStack