import React from "react";
import RecentProductCSS from "./RecentProduct.module.css"
import {parseImageUrl} from '../../../../Utils'
const RecentProduct = (props) => {
    console.log(props.rc);
    if(!props.rc)return(null);
    const titleData = props.rc.action.tracking;
    const pricingData = props.rc.value.pricing;
    return(
        <div className={RecentProductCSS['product-wrapper']}>
            <div className={RecentProductCSS['product-div']}>
                <img alt="Recent Product Image" className={RecentProductCSS['product-img']} src={parseImageUrl("1:1",props.rc.value.images[0].imageUrl,80)}></img>
                <div className={RecentProductCSS['product-details-div']}>
                    <div className={RecentProductCSS['product-title']}>{titleData.title_primary}</div>
                    <div className={RecentProductCSS['product-subtitle']}>{titleData.title_secondary}</div>
                    <div className={RecentProductCSS['pricing-div']}>
                        <div className={RecentProductCSS['price']}>&#x20B9;{pricingData.displayPrice}</div>
                        <div className={RecentProductCSS['strike-price']}>{pricingData.strikeOffPrice}</div>
                        <div className={RecentProductCSS['discount']}>{pricingData.discountPercentage}% off</div>
                    </div>
                </div>        
            </div>
        </div>
    );
}

export default RecentProduct;