import React, { useEffect, useState } from "react";
import './Banner.css'

export default function Banner({slot}){
    const [data, setData] = useState('')

    useEffect(()=>{
        if(slot)
            setData(slot.widget.data.renderableComponents[0].value.dynamicImageUrl)
    }, [slot])

    let newUrl = data.replace('{@width}', screen.width)
    newUrl = newUrl.replace('{@height}', 60)
    newUrl = newUrl.replace('{@quality}', 90)

    return(
        <div className='banner'>
            {/* <img src='https://rukminim1.flixcart.com/flap/360/72/image/ba4a7988d29e6b72.png?q=90'/> */}
            <img src={newUrl} height='60px' width={screen.width}/>
        </div>
    )
}