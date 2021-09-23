import React, { useEffect, useState } from "react";
import './ProductDetails.css'

export default function ProductDetails({ slot }) {
    const [data, setData] = useState([])
    useEffect(() => {
        if (slot) {
            console.log(slot.widget.data.renderableComponent.value.specification)
            setData(slot.widget.data.renderableComponent.value.specification)
        }
    }, [slot])
    useEffect(() => console.log({data}), [data])
    return (
        <div className='product details'>
            <div className='details__title'>Product Details</div>
            <div className='details__specs'>
                {data.map(d => 
                    <div>
                        <div className='details__name'>{d.name}</div>
                        <div className='details__values'>{d.values}</div>
                    </div>
                )}
                {/* <div>
                    <div className='details__name'>{slot && slot.widget.data.renderableComponent.value.specification[0].name}</div>
                    <div className='details__values'>{slot && slot.widget.data.renderableComponent.value.specification[0].values[0]}</div>
                </div> */}
                {/* <div>
                    <div className='details__name'>{d.name}</div>
                    <div className='details__values'>{d.values}</div>
                </div> */}
            </div>
        </div>
    )
}