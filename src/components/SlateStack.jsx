import React from 'react'

const card1Circuit = () => (
  <>

  {/* <div className='node'></div>
  <div className='node'></div>
  <div className='node'></div>
  <div className='node'></div>
  <div className='node'></div>
  <div className='transistor'></div>
  <div className='transistor'></div> */}

  </>

)

const SlateStack = ({ele}) => {

  const highlight = {backgroundColor: '#ec6b6b'}
  return (
    <>
      <div className='stack'>
        {ele === 1 ? <div className='card1 card' style={highlight}>{card1Circuit()}</div> : <div className='card1 card'>{card1Circuit()}</div>}
        {ele === 4 ? <div className='card2 card' style={highlight}></div> : <div className='card2 card'></div>}
        {ele === 3 ? <div className='card3 card' style={highlight}></div> : <div className='card3 card'></div>}
        {ele === 2 ? <div className='card4 card' style={highlight}></div> : <div className='card4 card'></div>}
      </div>
    </>
  )
}

export default SlateStack