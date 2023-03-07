import React, { useState } from 'react'

const Nav = ({sectionNumber, navButtonHandler}) => {

  const navButton = (rotate, move, cb, ele, color='#ffffff65') => (
    <button
      className={`navButton${ele} navButton`}
      style={{ transform: `rotate(${rotate}deg) translate(${move})`, backgroundColor: color }}
      onClick={() => cb(ele)}>
    </button>
  )

  return (
    <>
      <div className='circleNav'>

        {sectionNumber === 4 ? navButton('-62.5', '15%', navButtonHandler, 4, 'rgb(203 102 255 / 55%)') : navButton('-62.5', '3%', navButtonHandler, 4)}

        {sectionNumber === 3 ? navButton('-20', '15%', navButtonHandler, 3, 'rgb(77 99 255 / 65%)') : navButton('-20', '3%', navButtonHandler, 3)}
        {sectionNumber === 2 ? navButton('22.5', '15%', navButtonHandler, 2, 'rgb(0 255 196 / 56%)') : navButton('22.5', '3%', navButtonHandler, 2)}
        {sectionNumber === 1 || sectionNumber === 0 ? navButton('65', '15%', navButtonHandler, 1, '#00f7ffc4') : navButton('65', '3%', navButtonHandler, 1)}

        <div className='navCenterCircle'></div>

      </div>
    </>
  )
}

export default Nav