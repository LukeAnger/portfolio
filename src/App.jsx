import React, {useState} from 'react'
import SlateStack from './components/background/SlateStack.jsx'
import Nav from './components/Nav.jsx'
import Contact from './components/contact/Contact.jsx'
import Experience from './components/experience/Experience.jsx'
import Projects from './components/projects/Projects.jsx'
import Title from './components/about/Title.jsx'

const devScale = 'scale(0.25)'
const opacity = {opacity: '0'}


const App = () => {

  const [rotation , setRotation] = useState(0);
  const [scrollDelay, setScrollDelay] = useState(false)
  const currentEle = (((Math.abs(rotation/360)) % 1) * 4) + 1;

  const title = `title fc jc-cen ai-cen`
  const handleScrollDelay = () => {
    setScrollDelay(true); // stop scroll wheel from triggering function for 2 seconds
    setTimeout(() => {
      setScrollDelay(false);
    }, 2000);
  }

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
        handleScrollDelay();
        return currentEle - 3
      } else {
        handleScrollDelay();
        return currentEle + 1
      }
    } else {
      // rotate clockwise 90deg
      setRotation(() => (
        rotation + 90
      ))

      // if rotation is 360deg, set current element to 4
      if (currentEle === 4) {
        handleScrollDelay();
        return currentEle - 3
      } else {
        handleScrollDelay();
        return currentEle + 1
      }
    }
  }

  console.log('Current Rotation Angle: ', rotation)

  return (
    <>
    <div style={{position: 'absolute', right: '0px', width: '150px', height: '225px'}}>
      <SlateStack ele={currentEle}/>
    </div>

      <div className='pr app' onWheel={handleScroll}>

        <div className='circleContent' style={{transform: `translate(-50%, calc(50vh - 50%)) rotate(${rotation}deg)`}}>

        </div>

        <Nav
        sectionNumber={currentEle}
        currentRotation={rotation}
        navButtonHandler={navButtonHandler}/>


        <div className='content-wrapper'>
          <div className='content-wrapper-inner'>

            {currentEle === 1 ?
              <Title /> :
              <Title styles={opacity}/>}

            {currentEle === 2 ?
              <Experience /> :
              <Experience styles={opacity}/>}

            {currentEle === 3 ?
              <Projects /> :
              <Projects styles={opacity}/>}

            {currentEle === 4 ?
              <Contact /> :
              <Contact styles={opacity}/>}

          </div>
        </div>

      </div>

    </>
  )
}

export default App



/*
<div className='content-wrapper'>

            {currentEle === 1 ?
            <div className='title fc jc-cen ai-cen'>
              <div>Hello, my name is Luke Anger</div>
              <div style={{fontSize: '1.8rem'}}>I like puzzles, coding and solving problems</div>
            </div> :

            <div className='title fc jc-cen ai-cen' style={opacity}>
              <div>Hello, my name is Luke Anger</div>
              <div style={{fontSize: '1.8rem'}}>I like puzzles, coding and solving problems</div>
            </div>}

            {currentEle === 2 ? <div className='experience'>Experience</div> : <div className='experience' style={opacity}>Experience</div>}

            {currentEle === 3 ? <div className='projects'>Projects</div> : <div className='projects' style={opacity}>Projects</div>}

            {currentEle === 4 ? <Contact /> : <Contact styles={opacity}/>}

          </div>
*/