import React, { useEffect, useState } from "react";
import './ProductDetails.css'

export default function ProductDetails({ slot }) {
    const [data, setData] = useState([])
    const [detailTitle, setDetailTitle] = useState('')
    useEffect(() => {
        if (slot){
            setData(slot.widget.data.renderableComponent.value.specification)
            setDetailTitle(slot.widget.data.renderableComponent.value.details)
        }
    }, [slot])
    useEffect(() => console.log({data}), [data])
    return (
        <>
        <div className='title'>Product Details</div>
        <div className='details'>
            <div className='details__specs'>
                {data.map(d => 
                    <div key={d.name}>
                        <div className='details__name'>{d.name}</div>
                        <div className='details__values'>{d.values}</div>
                    </div>
                )}
            </div>
            <div className='details__title'>Details</div>
            <div className='details__detail-title'>{detailTitle}</div>
        </div>
        <div className='break-div'/>
        <div className='all-details'>
            <div className='all-details__value'>All Details</div>
            <div>
                <img className='all-details__arrow' src="https://rukminim1.flixcart.com/www/40/40/promos/14/06/2019/2b122c28-4cef-490b-a251-41e0176c977a.png?q=90" loading="lazy" alt="" />
            </div>
        </div>
        </>
    )
}