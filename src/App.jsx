import React, {useState, useEffect} from 'react'
import SlateStack from './components/background/SlateStack.jsx'
import Nav from './components/Nav.jsx'
import CircleTrack from './components/wheel/CircleTrack.jsx'
import Contact from './components/contact/Contact.jsx'
import Experience from './components/experience/Experience.jsx'
import Projects from './components/projects/Projects.jsx'
import Title from './components/about/Title.jsx'

const App = () => {

  const [startTouchY, setStartTouchY] = useState(null);
  const [rotation , setRotation] = useState(0);
  const [scrollDelay, setScrollDelay] = useState(false)
  const [currentEle, setCurrentEle] = useState(0)

  const title = `title fc jc-cen ai-cen`
  const handleScrollDelay = () => {
    setScrollDelay(true); // stop scroll wheel from triggering function for 2 seconds
    setTimeout(() => {
      setScrollDelay(false);
    }, 1000);
  }

  const navButtonHandler = (position) => {
    setRotation(rotation => rotation - (position-currentEle)*90);
    setCurrentEle(position)
  }

  const handleLoadScroll = (dir) => {
    dir > 0 ? setRotation(() => rotation - 90) : setRotation(() => rotation + 90)
    dir < 0 ? setCurrentEle(4) : setCurrentEle(2)
    handleScrollDelay()
  }

  const handleScroll = (e) => {
    if (scrollDelay) return;
    let direction = e.nativeEvent.deltaY
    if (currentEle === 0) {
      handleLoadScroll(direction)
      console.log('test load scroll: ', direction, currentEle)
      return
    }
    if (rotation === 0) {
      direction > 0 ? setRotation(() => rotation - 90) : setRotation(() => rotation + 90)
      direction < 0 ? setCurrentEle(4) : setCurrentEle(() => currentEle + 1)
      handleScrollDelay()
      return;
    }
      if (direction > 0) {
        setRotation(() => rotation - 90)
        currentEle === 4 ? setCurrentEle(1) : setCurrentEle(() => currentEle + 1)
      } else {
        setRotation(() => rotation + 90)
        currentEle === 1 ? setCurrentEle(4) : setCurrentEle(() => currentEle - 1)
      }
      handleScrollDelay()
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

    if (rotation === 0) {
      direction > 0 ? setRotation(() => rotation - 90) : setRotation(() => rotation + 90)
      direction < 0 ? setCurrentEle(4) : setCurrentEle(() => currentEle + 1)
      handleScrollDelay()
      return;
    }
      if (direction > 0) {
        setRotation(() => rotation - 90)
        currentEle === 4 ? setCurrentEle(1) : setCurrentEle(() => currentEle + 1)
      } else {
        setRotation(() => rotation + 90)
        currentEle === 1 ? setCurrentEle(4) : setCurrentEle(() => currentEle - 1)
      }
      handleScrollDelay()

  }

  // useEffect(() => setCurrentEle(1), [])

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

            {currentEle === 0 ?
              <Title ele={0}/> :
              null }
            {currentEle === 1 ?
              <Title /> :
              null }

            {currentEle === 2 ?
              <Experience /> :
              null }

            {currentEle === 3 ?
              <Projects /> :
              null }

            {currentEle === 4 ?
              <Contact /> :
              null }

          </div>
        </div>

      </div>

    </>
  )
}

export default App

