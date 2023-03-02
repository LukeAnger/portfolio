import React from 'react';
import * as Icon from './skillIcons'

let iconProj = (i, translate, color) => <div className={`pa iconProjector${i}`}
style={
  {
    width: '16px',
    height: '16px',
    background: color,
    borderRadius: '50%',
    top: '50%',
    left: '50%'
  }
}>

</div>


const Skills = ({styles}) => {
  return(
    <div className='icons' style={styles}>
      {iconProj(1, '-25%, -25%', '#61DAFB')}
      {iconProj(2, '150%, -100%', 'rgb(255 220 49 / 50%)')}
      {iconProj(3, '325%, -25%', 'rgb(255 84 36 / 50%)')}
      {iconProj(4, '400%, 150%', 'rgb(0 147 255 / 50%)')}
      {iconProj(5, '325%, 325%', 'rgb(151 151 151 / 50%)')}
      {iconProj(6, '150%, 400%', 'rgb(0 255 0 / 50%)')}
      {iconProj(7, '-25%, 325%', 'rgb(93 134 255 / 50%)')}
      {iconProj(8, '-100%, 150%', 'rgb(0 255 0 / 50%)')}

      {Icon.reactIcon()}
      {Icon.javascriptIcon()}
      {Icon.htmlIcon()}
      {Icon.cssIcon()}
      {Icon.expressIcon()}
      {Icon.nodeIcon()}
      {Icon.postgreIcon()}
      {Icon.mongoIcon()}
    </div>
  )
}

export default Skills;