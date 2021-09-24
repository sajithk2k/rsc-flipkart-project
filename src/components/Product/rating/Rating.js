import React, { useEffect, useState } from "react";
import './Rating.css'

export default function Rating({slot}){
    const [data, setData] = useState({})

    useEffect(()=>{
        if(slot){
            setData({
                'btnValue':slot.widget.data.reviewButton.value.title,
                'rate':slot.widget.data.rating.value.average.toFixed(1),
                'ratings':slot.widget.data.rating.value.ratingCount,
                'reviews':slot.widget.data.rating.value.reviewCount
            })
        }
    }, [slot])

    return(
        <>
            <div className='title rating-title'>
                <div className='rating-title__value'>
                    <div>Ratings and Reviews</div>
                </div>
                <div className='rating-title__rate-btn'>
                    <div className='rating-title__btn-text'>{data.btnValue}</div>
                </div>
            </div>
            <div className='rating-detail'>
                <div className='rating-detail__div'>
                    <div className='rating-detail__rate'>
                        <div className='rating-detail__rate-value'>
                            {data.rate} ★
                        </div>
                    </div>
                    <div className='rating-detail__review'>
                        {data.ratings} ratings and {data.reviews} reviews
                    </div>
                </div>
            </div>
        </>
    )
}