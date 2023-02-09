import React from 'react'

const SlateStack = ({ele}) => {

  const highlight = {backgroundColor: '#ec6b6b'}
  return (
    <>
      <div className='stack'>
        {ele === 1 ? <div className='card1' style={highlight}></div> : <div className='card1'></div>}
        {ele === 4 ? <div className='card2' style={highlight}></div> : <div className='card2'></div>}
        {ele === 3 ? <div className='card3' style={highlight}></div> : <div className='card3'></div>}
        {ele === 2 ? <div className='card4' style={highlight}></div> : <div className='card4'></div>}
      </div>
    </>
  )
}

export default SlateStack