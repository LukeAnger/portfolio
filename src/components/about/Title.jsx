import React from 'react'

const Title = ({styles = {}}) => {

  return (
    <>
      <div className='title pa holoText holoTextTitle' style={styles}>
        Luke Anger
      </div>
    </>
  )
}

export default Title;