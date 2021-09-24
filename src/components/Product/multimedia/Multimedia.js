import React, { useEffect, useState } from 'react'
import Slider from './Slider'

export default function Multimedia({slot}) {
  const [imageData, setImageData] = useState([])
  const width = screen.width
  const height = Math.floor((width*6)/5)
  const quality = '90'

  useEffect(()=>{
    if(slot){
      const data = slot.widget.data.multimediaComponents
      console.log(data)
      data.map(d=>{
        let url = d.value.url
        url = url.replace('{@width}', `${width}`)
        url = url.replace('{@height}', `${height}`)
        url = url.replace('{@quality}', `${quality}`)
        console.log(url)

        setImageData(prev=>[url, ...prev])
      })
    }
  },[slot])

  return (
    <>
      <Slider slides={imageData} height={height} width={width}/>
    </>
  )
}