import React, { useState } from 'react'

const Nav = ({sectionNumber, navButtonHandler}) => {

  const navButton = (rotate, move, cb, ele) => (
    <button
      className={`navButton${ele} navButton`}
      style={{ transform: `rotate(${rotate}deg) translate(${move})` }}
      onClick={() => cb(ele)}>
    </button>
  )

  return (
    <>
      <div className='circleNav'>

        {sectionNumber === 4 ? navButton('-62.5', '15%', navButtonHandler, 4) : navButton('-62.5', '3%', navButtonHandler, 4)}
        {sectionNumber === 3 ? navButton('-20', '15%', navButtonHandler, 3) : navButton('-20', '3%', navButtonHandler, 3)}
        {sectionNumber === 2 ? navButton('22.5', '15%', navButtonHandler, 2) : navButton('22.5', '3%', navButtonHandler, 2)}
        {sectionNumber === 1 ? navButton('65', '15%', navButtonHandler, 1) : navButton('65', '3%', navButtonHandler, 1)}

        <div className='navCenterCircle'></div>

      </div>
    </>
  )
}

export default Nav