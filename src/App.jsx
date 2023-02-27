import React, {useState} from 'react'
import SlateStack from './components/background/SlateStack.jsx'
import Nav from './components/Nav.jsx'
import CircleTrack from './components/CircleTrack.jsx'
import Contact from './components/contact/Contact.jsx'
import Experience from './components/experience/Experience.jsx'
import Projects from './components/projects/Projects.jsx'
import Title from './components/about/Title.jsx'

const devScale = 'scale(0.25)'
const opacity = {opacity: '0'}
const fadeIn = {transition: '2s ease-in-out'}

const App = () => {

  const [startTouchY, setStartTouchY] = useState(null);
  const [rotation , setRotation] = useState(0);
  const [scrollDelay, setScrollDelay] = useState(false)
  const [currentEle, setCurrentEle] = useState(1)

  const title = `title fc jc-cen ai-cen`
  const handleScrollDelay = () => {
    setScrollDelay(true); // stop scroll wheel from triggering function for 2 seconds
    setTimeout(() => {
      setScrollDelay(false);
    }, 2000);
  }

  const navButtonHandler = (position) => {
    setRotation(rotation => rotation - (position-currentEle)*90);
    setCurrentEle(position)
  }

  const handleScroll = (e) => {
    if (scrollDelay) return;
    let direction = e.nativeEvent.deltaY
    if (direction > 0) {
      // rotate counter clockwise 90deg
      setRotation(() => (
        rotation - 90
      ))
      // if rotation is 360deg, set current element to 1
      if (currentEle === 4) {
        handleScrollDelay();
        setCurrentEle(currentEle => (((Math.abs(rotation/360)) % 1) * 4) + 1 - 3)
      } else {
        handleScrollDelay();
        setCurrentEle(currentEle => (((Math.abs(rotation/360)) % 1) * 4) + 1 + 1)
      }
    } else {
      // rotate clockwise 90deg
      setRotation(() => (
        rotation + 90
      ))

      // if rotation is 360deg, set current element to 4
      if (currentEle === 1) {
        handleScrollDelay();
        setCurrentEle(currentEle => (((Math.abs(rotation/360)) % 1) * 4) + 1 + 3)
      } else {
        handleScrollDelay();
        setCurrentEle(currentEle => (((Math.abs(rotation/360)) % 1) * 4) + 1 - 1)
      }
    }
  }

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartTouchY(touch.clientY);
  }

  const handleTouchEnd = (e) => {
    if (scrollDelay) return;
    const touch = e.changedTouches[0];
    const currentTouchY = touch.clientY;
    const distance = Math.abs(currentTouchY - startTouchY)

    if (distance < 15) return;
    let direction = 0;

    if (startTouchY !== null) {
      direction = currentTouchY > startTouchY ? 1 : -1;
    }

    if (direction > 0) {
      // rotate counter clockwise 90deg
      setRotation(() => (
        rotation - 90
      ))

      // if rotation is 360deg, set current element to 1
      if (currentEle === 4) {
        handleScrollDelay();
        setCurrentEle(currentEle => (((Math.abs(rotation/360)) % 1) * 4) + 1 - 3)
      } else {
        handleScrollDelay();
        setCurrentEle(currentEle => (((Math.abs(rotation/360)) % 1) * 4) + 1 + 1)
      }
    } else if (direction < 0) {
      // rotate clockwise 90deg
      setRotation(() => (
        rotation + 90
      ))

      // if rotation is 360deg, set current element to 4
      if (currentEle === 1) {
        handleScrollDelay();
        setCurrentEle(currentEle => (((Math.abs(rotation/360)) % 1) * 4) + 1 + 3)
      } else {
        handleScrollDelay();
        setCurrentEle(currentEle => (((Math.abs(rotation/360)) % 1) * 4) + 1 - 1)
      }
    }
  }


  return (
    <>
    <div className='background' style={{position: 'absolute', right: '0px', width: '150px', height: '225px'}}>
      <SlateStack ele={currentEle}/>


    </div>

      <div className='pr app' onWheel={handleScroll} onTouchStart={handleTouchStart}  onTouchEnd={handleTouchEnd}>

        <CircleTrack rotation={rotation} />


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
              <Experience styles={fadeIn}/> :
              <Experience styles={opacity}/>}

            {currentEle === 3 ?
              <Projects styles={fadeIn}/> :
              <Projects styles={opacity}/>}

            {currentEle === 4 ?
              <Contact styles={fadeIn}/> :
              <Contact styles={opacity}/>}

          </div>
        </div>

      </div>

    </>
  )
}

export default App

