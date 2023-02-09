import React, {useState} from 'react'

const App = () => {

  const [rotation , setRotation] = useState(0);

  const prevState = 0;
  const handleScroll = (e) => {
    let direction = e.nativeEvent.deltaY

    if (direction < 0) {
      setRotation(() => (
        rotation + 90
      ))
    } else {
      setRotation(() => (
        rotation - 90
      ))
    }
    // trying to get a smooth scroll from +/- 360 to 0 without doing a full 360 turn
    // if (rotation === -360 || rotation === 360) {
    //   setRotation(0)
    // }
  }

  console.log(rotation)
  return (
    <>
      <div className='pr'>
        <div className='circleContent' style={{transform: `translate(-50%, calc(50vh - 50%)) rotate(${rotation}deg)`}} onWheel={handleScroll} >

          <div className='content-wrapper'>

            <div className='title fc jc-cen ai-cen'>

              <div>Hello, my name is Luke Anger</div>
              <div style={{fontSize: '1.8rem'}}>I like puzzles, coding and solving problems</div>


              </div>
            <div className='about'>About Me</div>
            <div className='projects'>Projects</div>
            <div className='experience'>Experience</div>

          </div>



        </div>
        <div className='circleNav'></div>
      </div>
    </>
  )
}

export default App