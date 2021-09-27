import React, { useState, useEffect } from 'react'
import './Product.css'
import Multimedia from '$multimedia/Multimedia'
import ProductPageSummary from '$product_page_summary/ProductPageSummary'
import ProductDetails from '$product_details/ProductDetails'
import Banner from '$banner/Banner'
import BreakWidget from './BreakWidget'
import Rating from '$rating/Rating'
// import Shell from '../shell/Shell.js'
// import Header from '../header/Header'

const widgets = {
    'MULTIMEDIA':Multimedia, 
    'PRODUCT_PAGE_SUMMARY':ProductPageSummary,
    'PRODUCT_DETAILS':ProductDetails,
    'BANNER':Banner,
    'RATING':Rating,
}

export default function Product() {
    const [slots, setSlots] = useState([])
    const [priceDetails, setPriceDetails] = useState({})

    useEffect(()=>
    {
      fetch('http://localhost:3000/api/product')
      .then(data=>data.json())
      .then(data=>{
        // console.log(data)
        setPriceDetails(data['RESPONSE']['pageData']['pageContext'])
        setSlots(data['RESPONSE']['slots'])
      })
    }
  , [])
  
    if(slots.length === 0)return(null)
    return (
        <>   
            {slots.map((slot, i)=>{
                console.log(slot.widget.type)
                const WidgetName=widgets[slot.widget.type]
                console.log(WidgetName)
                return (
                    <>
                        {i!==5 && <WidgetName key={i} slot={slot} priceDetails={priceDetails}/>}
                        {i!==0 && <BreakWidget/>}
                    </>
                )
            })}

            {/* <Shell /> */}
            {/* <Header/> */}
        </>
    )
}