import React, { useState, useEffect } from 'react'
import Multimedia from '$multimedia/Multimedia'
import ProductPageSummary from '$product_page_summary/ProductPageSummary'
// import ProductDetails from '$product_details/ProductDetails'
// import Banner from '$banner/Banner'
// import Rating from '$rating/Rating'
// import Shell from '$shell/Shell.js'
// import Header from '$header/Header'

const widgets = [
    {
        type:'MULTIMEDIA',
        component:Multimedia
    }, 
    {
        type:'PRODUCT_PAGE_SUMMARY', 
        component:ProductPageSummary
    },
    // {
    //     type:'PRODUCT_DETAILS', 
    //     component:ProductDetails
    // },
    // {
    //     type:'BANNER', 
    //     component:Banner
    // },
    // {
    //     type:'RATING',
    //     component:Rating
    // }
]

export default function Product() {
    const [slots, setSlots] = useState([])

    useEffect(()=>
    {
      fetch('http://localhost:3000/api/product')
      .then(data=>data.json())
      .then(data=>data['RESPONSE']['slots'])
      .then(data=>{
        console.log(data)
        setSlots(data)
      })
    }
  , [])

    return (
        <>   
            {widgets.map(widget=>
                React.createElement(widget.component, {slot:slots.find(slot=>slot.widget.type===widget.type)})
            )}
            {/* <Shell /> */}
            {/* <Header/> */}
        </>
    )
}