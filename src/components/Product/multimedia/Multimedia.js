import React, { useEffect, useState } from 'react'
import Slider from './Slider'
// import {fetch} from 'react-fetch'

// const ImageData = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0c3x8fHx8fDE2MzE2Mjk2NDQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=350",
//   },
//   {
//     image: s
//       "https://images.unsplash.com/photo-1595168535172-9b94f747b78c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0c3x8fHx8fDE2MzE2Mjk3MTQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=350",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1527416876370-fb74d128c3dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0c3x8fHx8fDE2MzE2Mjk3NDA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=350",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1618678900888-da259539f5ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0c3x8fHx8fDE2MzE2Mjk3ODE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=350",
//   },
// ];

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