import React from 'react'

const Contact = ({styles = {}}) => {
  return (
    <>
      <div className='contact' style={styles}>
        <div className='contactTitle'>Contact</div>
        <div className='contactContent'>
          <div className='contactContentLeft'>
            <div className='contactContentLeftTitle'>Email</div>
            <div className='contactContentLeftText'>
              <a href='mailto:anger.luke@gmail.com'>email</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
  export default Contact