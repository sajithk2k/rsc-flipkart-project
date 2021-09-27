import React from "react";
import RecentProductCSS from "./RecentProduct.module.css"
import {parseImageUrl} from '../../../../Utils'
const RecentProduct = (props) => {
    console.log(props.rc);
    if(!props.rc)return(null);
    return(
        <div className={RecentProductCSS['product-wrapper']}>
            <div className={RecentProductCSS['product-div']}>
                <img alt="Recent Product Image" className={RecentProductCSS['product-img']} src={parseImageUrl("1:1",props.rc.value.images[0].imageUrl,80)[0]}></img>
                <div className={RecentProductCSS['product-details-div']}>
                    <div className={RecentProductCSS['product-title']}>{props.rc.action.tracking.title_primary}</div>
                    <div className={RecentProductCSS['product-subtitle']}>{props.rc.action.tracking.title_secondary}</div>
                    <div className={RecentProductCSS['pricing-div']}>
                        <div className={RecentProductCSS['price']}>&#x20B9;{props.rc.value.pricing.displayPrice}</div>
                        <div className={RecentProductCSS['strike-price']}>{props.rc.value.pricing.strikeOffPrice}</div>
                        <div className={RecentProductCSS['discount']}>{props.rc.value.pricing.discountPercentage}% off</div>
                    </div>
                </div>        
            </div>
        </div>
    );
}

export default RecentProduct;