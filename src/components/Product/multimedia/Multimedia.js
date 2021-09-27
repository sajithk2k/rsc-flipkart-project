import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import { parseImageUrl } from '../../../Utils'

export default function Multimedia({ slot }) {
  const [imageData, setImageData] = useState({url:[]})
  const width = screen.width

  const getData = () => slot.widget.data.multimediaComponents
  const getAspectRatio = (data) => data.value.aspectRatio
  const getUrl = (data) => data.value.url

  useEffect(() => {
    if (slot) {
      getData().map((data, i) => {
        const [newUrl, height] = parseImageUrl(getAspectRatio(data), getUrl(data), width)
        setImageData(prev => ({ url: i === 0 ? [newUrl] : [newUrl, ...prev.url], height }))
      })
    }
  }, [slot])

  return (
    <>
      <Slider slides={imageData.url} 
      height={imageData.height} 
      width={width}
      />
    </>
  )
}