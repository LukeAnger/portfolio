import React, { useState } from 'react'



const Nav = ({sectionNumber, navButtonHandler}) => {

  console.log('Nav sectionNumber', sectionNumber)

  const navButton = (rotate, move, cb, ele) => (
    <button
      className='navButton'
      style={{ transform: `rotate(${rotate}deg) translate(${move})` }}
      onClick={() => cb(ele)}>
    </button>
  )

  return (
    <>
      <div className='circleNav'>

        {sectionNumber === 4 ? navButton('-62.5', '30px', navButtonHandler, 4) : navButton('-62.5', '5px', navButtonHandler, 4)}
        {sectionNumber === 3 ? navButton('-20', '30px', navButtonHandler, 3) : navButton('-20', '5px', navButtonHandler, 3)}
        {sectionNumber === 2 ? navButton('22.5', '30px', navButtonHandler, 2) : navButton('22.5', '5px', navButtonHandler, 2)}
        {sectionNumber === 1 ? navButton('65', '30px', navButtonHandler, 1) : navButton('65', '5px', navButtonHandler, 1)}

        <div className='navCenterCircle'></div>

      </div>
    </>
  )
}

export default Nav