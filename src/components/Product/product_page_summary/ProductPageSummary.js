import React, { useEffect, useState } from 'react'
import './ProductPageSummary.css'

export default function ProductPageSummary({slot, priceDetails}) {
    const [data, setData] = useState({})
    const getProductName=()=>slot.widget.data.titleComponent.value.newTitle
    const getCompanyName=()=>slot.widget.data.titleComponent.value.superTitle
    const getPrice=()=>parseInt(priceDetails.pricing.prices.find(item=>item.name==='Selling Price').decimalValue)
    const getMRP=()=>parseInt(priceDetails.pricing.prices.find(item=>item.name==='Maximum Retail Price').decimalValue)
    const getDiscount=()=>priceDetails.pricing.totalDiscount
    const getRate=()=>slot.widget.data.ratingsAndReviews.value.rating.average
    const getRatings=()=>slot.widget.data.ratingsAndReviews.value.rating.count
    const getFAvailable=()=>priceDetails.faAvailable

    useEffect(()=>{
        if(slot){
            setData({
            'productName':getProductName(),
            'companyName':getCompanyName(),
            'price':getPrice(),
            'mrp':getMRP(),
            'discount':getDiscount(),
            'rate':getRate(),
            'ratings':getRatings(),
            'favailable':getFAvailable(),
        })
    }}, [slot])

    return (
        <>
        <div className='summary'>
            <div className='summary__companyName'>{data.companyName}</div>
            <div className='summary__productName'>{data.productName}</div>
            <div className='summary__priceDetails'>
                <div className='summary__price'>₹{data.price}</div>
                <div className='summary__mrp'>{data.mrp}</div>
                <div className='summary__discount'>{data.discount}% off</div>
            </div>
            <div className='summary__rate-ratings'>
                <div className="summary__rate" >
                    <div className='summary__value'>{data.rate} ★</div>
                </div>
                <div className='summary__ratings'>{data.ratings} ratings</div>
                <div className='summary__fa'>
                    {data.favailable && <img className='summary__f-assured-img' src="https://rukminim1.flixcart.com/www/200/50/promos/21/07/2017/e8625e14-3277-4f16-a4d4-df8ed525905b.png?q=90" loading="lazy"/>}
                </div>
            </div>
        </div>
        </>
    )
}
