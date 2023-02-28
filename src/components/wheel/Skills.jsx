import React from 'react';
import * as Icon from './skillIcons'

const Skills = () => {
  return(
    <div className='icons' style={{animation: 'fadeIn 2s ease-in forwards 4s'}}>
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