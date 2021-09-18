import { useEffect, useRef, useState } from "react";
import Dots from './Dots'
import React from 'react'

export default function Slider(props) {
  const isScrollRef = useRef()
  const [current, setCurrent] = useState(0)

  function getSwiper() {
    return document.getElementsByClassName("swiper")[0]
  }

  function getDelta() {
    const width = getSwiper().scrollWidth
    return width / props.slides.length
  }

  function handleScroll(e) {
    clearTimeout(isScrollRef.current);
    isScrollRef.current = setTimeout(function () {
      const currentTouch = e.target.scrollLeft
      // console.log('currentTouch : ', currentTouch)
      const ratio = (currentTouch % getDelta()) / getDelta()
      const temp = Math.round(currentTouch / getDelta())
      // console.log('ratio : ', ratio)
      if (ratio<0.5 && ratio>0.10) {
        console.log('between 0.1 to 0.5')
        if (temp >= current)
          setCurrent(current + 1)
        else
          setCurrent(current - 1)
      }
      else if (ratio<1 && ratio>0.5) {
        console.log('between 0.5 and 0.9')
        if (temp <= current)
          setCurrent(current - 1)
        else
          setCurrent(current + 1)
      }
      else if(ratio===0)
        setCurrent(temp)
      else {
        getSwiper().scrollTo({
          left: current * getDelta(),
          behavior: "smooth",
        })
      }
    }, 66);
  }

  useEffect(() => {
    // console.log('current : ', current)
    getSwiper().scrollTo({
      left: current * getDelta(),
      behavior: "smooth",
    })
  }, [current])

  return (
    <div className='slider'>
      <div className='swiper' onScroll={handleScroll}>
        {props.slides.map((slide, index) =>
          <img className='carousel-img' key={index} src={slide.image} alt="" />)}
      </div>
      <Dots slides={props.slides} current={current}/>
      {/* {props.children} */}
    </div>
  );
};