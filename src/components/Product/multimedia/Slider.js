import React from 'react'
import { useEffect, useRef, useState } from "react";
import './Slider.css'
import Dots from './Dots'
import BackHeader from '../../shell/BackHeader';

export default function Slider(props) {
  const isScrollRef = useRef()
  const [current, setCurrent] = useState(0)

  function getSwiper() {
    return document.getElementsByClassName("slider__swiper")[0]
  }

  function getDelta() {
    const width = getSwiper().scrollWidth
    return width / props.slides.length
  }

  function handleScroll(e) {
    clearTimeout(isScrollRef.current);
    isScrollRef.current = setTimeout(function () {
      const currentTouch = e.target.scrollLeft
      const ratio = (currentTouch % getDelta()) / getDelta()
      const temp = Math.round(currentTouch / getDelta())
      if (ratio < 0.5 && ratio > 0.10) {
        if (temp >= current)
          setCurrent(current + 1)
        else
          setCurrent(current - 1)
      }
      else if (ratio < 1 && ratio > 0.5) {
        if (temp <= current)
          setCurrent(current - 1)
        else
          setCurrent(current + 1)
      }
      else if (ratio === 0)
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
    getSwiper().scrollTo({
      left: current * getDelta(),
      behavior: "smooth",
    })
  }, [current])

  return (
    <div>
      <BackHeader />
      <div className='slider'>
        <div className='slider__swiper' onScroll={handleScroll}>
          {props.slides.map((slide, index) => 
            <img className='slider__carousel-img' 
            key={index} 
            src={slide} 
            alt="" 
            width={props.width} 
            height={props.height} 
            />
          )}
        </div>
      </div>
      <Dots slides={props.slides} current={current} />
    </div>
  );
};