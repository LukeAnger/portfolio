import React from 'react'
import { circuitBoard1, circuit1 } from './svgs.js'

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

const slideOut = (num) => ({transform: `translate(-60px, calc(60px - ${30*(num)}px)) rotateX(60deg) rotateZ(45deg)`});

const SlateStack = ({ele}) => {

  const highlight = {backgroundColor: '#ec6b6b'}
  return (
    <>
      <div className='stack'>
        {ele === 1 ?
        <div className='card1 card' style={slideOut(1)}>{circuitBoard1()}{circuit1()}</div> : <div className='card1 card'>{circuitBoard1()}</div>}
        {ele === 2 ?
        <div className='card2 card' style={slideOut(2)}>{circuitBoard1()}{circuit1()}</div> :
        <div className='card2 card'>{circuitBoard1()}</div>}
        {ele === 3 ?
        <div className='card3 card' style={slideOut(3)}>{circuitBoard1()}{circuit1()}</div> :
        <div className='card3 card'>{circuitBoard1()}</div>}
        {ele === 4 ?
        <div className='card4 card' style={slideOut(4)}>{circuitBoard1()}{circuit1()}</div> :
        <div className='card4 card'>{circuitBoard1()}</div>
        }


      </div>
    </>
  )
}

export default SlateStack