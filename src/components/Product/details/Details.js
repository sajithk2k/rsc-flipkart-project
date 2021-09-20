import React from 'react'
import './Details.css'

export default function Name() {
    return (
        <div className='details'>
            <div id='companyName'>Aayu</div>
            <div id='productName'>AAA High Quality Floral Gold Plated Stylish Fancy Party Wear Cubic Zirconia Alloy Stud Earring</div>
            <div id='priceDetails'>
                <div id='price'>₹599</div>
                <div id='mrp'>1099</div>
                <div id='discount'>45% off</div>
            </div>
            <div id='fixed'>
                <div id='f-assured'>
                    <img id='f-assured-img' src="https://rukminim1.flixcart.com/www/200/50/promos/21/07/2017/e8625e14-3277-4f16-a4d4-df8ed525905b.png?q=90" loading="lazy"/>
                </div>
                <div id='delivery'>
                    FREE Delivery on orders over ₹499 
                </div>
            </div>
            {/* <div className='ratings'>ratings</div> */}
        </div>
    )
}
