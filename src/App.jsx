import React, {useState} from 'react'
import SlateStack from './components/background/SlateStack.jsx'
import Nav from './components/Nav.jsx'

const App = () => {

  const [rotation , setRotation] = useState(0);
  const [scrollDelay, setScrollDelay] = useState(false)
  const currentEle = (((Math.abs(rotation/360)) % 1) * 4) + 1;
  console.log('MATH: ', ((Math.abs(rotation/360)) % 1) * 4 + 1)
  const title = `title fc jc-cen ai-cen`

  const navButtonHandler = (position) => {
    console.log('nav button clicked', position-currentEle)
    setRotation(rotation => rotation - (position-currentEle)*90)
  }

  const handleScroll = (e) => {
    if (scrollDelay) return;
    let direction = e.nativeEvent.deltaY
    console.log('direction: ', direction)
    if (direction > 0) {
      // rotate counter clockwise 90deg
      setRotation(() => (
        rotation - 90
      ))

      // if rotation is 360deg, set current element to 1
      if (currentEle === 1) {
        return currentEle - 3
      } else {
        return currentEle + 1
      }
    } else {
      // rotate clockwise 90deg
      setRotation(() => (
        rotation + 90
      ))

      // if rotation is 360deg, set current element to 4
      if (currentEle === 4) {
        return currentEle - 3
      } else {
        return currentEle + 1
      }
    }

    setScrollDelay(true); // stop scroll wheel from triggering function for 2 seconds
    setTimeout(() => {
      setScrollDelay(false);
    }, 2000);
  }

  console.log('Current Rotation Angle: ', rotation)

  return (
    <>
    <div style={{position: 'absolute', right: '25px', width: '150px', height: '225px'}}>
      <SlateStack ele={currentEle}/>
    </div>
      <div className='pr'>
        <div className='circleContent' style={{transform: `translate(-50%, calc(50vh - 50%)) rotate(${rotation}deg)`}} onWheel={handleScroll} >

          <div className='content-wrapper'>

          {currentEle === 1 ?

          <div className='title fc jc-cen ai-cen'>

              <div>Hello, my name is Luke Anger</div>
              <div style={{fontSize: '1.8rem'}}>I like puzzles, coding and solving problems</div>
              </div> :

              <div className='title fc jc-cen ai-cen'  style={{opacity: '0'}}>

<div>Hello, my name is Luke Anger</div>
<div style={{fontSize: '1.8rem'}}>I like puzzles, coding and solving problems</div>


              </div>}
              {currentEle === 2 ? <div className='about'>Experience</div> : <div className='about' style={{opacity: '0'}}>Experience</div>}

            {currentEle === 3 ? <div className='projects'>Projects</div> : <div className='projects' style={{opacity: '0'}}>Projects</div>}

            {currentEle === 4 ? <div className='experience'>About Me</div> : <div className='experience' style={{opacity: '0'}}>About Me</div>}

          </div>



        </div>
        <Nav
        sectionNumber={currentEle}
        currentRotation={rotation}
        navButtonHandler={navButtonHandler}/>
      </div>
    </>
  )
}

export default App