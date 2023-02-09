import React, {useState} from 'react'

const App = () => {

  const [rotation , setRotation] = useState(0);
  const [scrollDelay, setScrollDelay] = useState(false)
  const [currentEle, setCurrentEle] = useState(1)


  const handleScroll = (e) => {
    if (scrollDelay) return;
    let direction = e.nativeEvent.deltaY

    if (direction < 0) {
      setRotation(() => (
        rotation + 90
      ))
      setCurrentEle(() => {
        if (currentEle === 4) {
          return currentEle - 3
        } else {
          return currentEle + 1
        }
      })
    } else {
      setRotation(() => (
        rotation - 90
      ))
      setCurrentEle(() => {
        if (currentEle === 1) {
          return currentEle + 3
        } else {
          return currentEle - 1
        }
      })
    }


    setScrollDelay(true);
    setTimeout(() => {
      setScrollDelay(false);
    }, 2000);
  }

  console.log(rotation, currentEle)
  return (
    <>
    <div style={{position: 'absolute', right: '25px'}}>{currentEle.toString()}</div>
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