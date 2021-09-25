import React, { useEffect, useState } from "react";
import './ProductDetails.css'

export default function ProductDetails({ slot }) {
    const [data, setData] = useState({specs:[]})

    const getSpecs=()=>slot.widget.data.renderableComponent.value.specification
    const getDetailsTitle=()=>slot.widget.data.renderableComponent.value.details

    useEffect(() => {
        if (slot){
            console.log(getSpecs())
            setData({
                specs: getSpecs(),
                detailsTitle: getDetailsTitle()
            })
        }
    }, [slot])
    useEffect(() => console.log({data}), [data])
    return (
        // Product Details and All details from json??
        <>
        <div className='title'>Product Details</div>
        <div className='details'>
            <div className='details__specs'>
                {data.specs.map(d => 
                    <div key={d.name}>
                        <div className='details__name'>{d.name}</div>
                        <div className='details__values'>{d.values}</div>
                    </div>
                )}
            </div>
            <div className='details__title'>Details</div>  
            <div className='details__detail-title'>{data.detailsTitle}</div>
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