import React from 'react'

const Contact = ({styles = {}}) => {
  return (
    <>
      <div className='contact pa' style={styles}>
        <div className='contactTitle  holoText' style={{animation: 'fadeIn 2s ease-in forwards 1s, holoText 5s infinite ease-in-out alternate'}}>Contact</div>
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKJkqFkFXA9ujJbEqh424tmy7vFFJhUM3Rk_ggKjAjigkFzg/viewform?embedded=true" width="640" height="809" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe> */}
      </div>
    </>
  )
}
  export default Contact