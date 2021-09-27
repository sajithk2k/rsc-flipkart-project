import React, { useEffect, useState } from "react";
import './Rating.css'

export default function Rating({slot}){
    const [data, setData] = useState({})
    
    const getBtnValue=()=>slot.widget.data.reviewButton.value.title
    const getRate=()=>slot.widget.data.rating.value.average.toFixed(1)
    const getRatings=()=>slot.widget.data.rating.value.ratingCount
    const getReviews=()=>slot.widget.data.rating.value.reviewCount

    useEffect(()=>{
        if(slot){
            setData({
                'btnValue': getBtnValue(),
                'rate': getRate(),
                'ratings': getRatings(),
                'reviews': getReviews()
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