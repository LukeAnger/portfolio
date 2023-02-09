import React from 'react'


const SyzygyLogo = () => {


  return (
    <div id='solar'>

      <div className='sun fr jc-cen ai-cen'>

        <div className='mercury pa' ></div>
        <div className='venus  pa' ></div>
        <div className='earth  pa' ></div>
        <div className='mars  pa' ></div>
        <div className='jupiter '>
          <div className='red-eye pa' ></div>
        </div>
        <div className='saturn '>
          <div className='ring pa' ></div>
        </div>
        <div className='uranus  pa' ></div>
        <div className='neptune  pa' ></div>
      </div>

      <div id='syzygy'>
        <div>S</div>
        <div>Y</div>
        <div>Z</div>
        <div>Y</div>
        <div>G</div>
        <div>Y</div>
      </div>

    </div>
  )
}

export default SyzygyLogo