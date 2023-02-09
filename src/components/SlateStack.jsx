import React from 'react'

const SlateStack = ({ele}) => {

  const highlight = {backgroundColor: '#ec6b6b'}
  return (
    <>
      <div className='stack'>
        {ele === 1 ? <div style={highlight}></div> : <div></div>}
        {ele === 2 ? <div style={highlight}></div> : <div></div>}
        {ele === 3 ? <div style={highlight}></div> : <div></div>}
        {ele === 4 ? <div style={highlight}></div> : <div></div>}
      </div>
    </>
  )
}

export default SlateStack