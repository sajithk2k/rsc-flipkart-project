import React from 'react'

export default function Name() {
    return (
        <div className='details'>
            <div className='companyName'>Aayu</div>
            <div className='productName'>AAA High Quality Floral Gold Plated Stylish Fancy Party Wear Cubic Zirconia Alloy Stud Earring</div>
            <div className='priceDetails'>
                <div className='price'>₹599</div>
                <div className='mrp'>1099</div>
                <div className='discount'>45% off</div>
            </div>
            <div className='fixed'>
                <div className='f-assured'>
                    <img className='f-assured-img' src="https://rukminim1.flixcart.com/www/200/50/promos/21/07/2017/e8625e14-3277-4f16-a4d4-df8ed525905b.png?q=90" loading="lazy"/>
                </div>
                <div className='delivery'>
                    FREE Delivery on orders over ₹499 
                </div>
            </div>
            {/* <div className='ratings'>ratings</div> */}
        </div>
    )
}
