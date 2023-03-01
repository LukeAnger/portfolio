import React from 'react';
import * as Icon from './skillIcons'

const Skills = ({styles}) => {
  return(
    <div className='icons' style={styles}>
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