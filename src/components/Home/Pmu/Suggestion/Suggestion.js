import React from "react";
import { parseImageUrl } from "../../../../Utils";
import SuggestionCSS from './Suggestion.module.css';
const Suggestion = (props) => {
    console.log(props.rc);
    if(!props.rc)return(null);
    let pricingData = props.rc.value.pricing;
    return(
        <div className={SuggestionCSS['suggestion-div']}>
            <img className={SuggestionCSS['suggestion-img']} src={parseImageUrl("1:1",props.rc.value.images[0].imageUrl,props.width)[0]}></img>
            <div className={SuggestionCSS['title-div']}>{props.rc.value.titles.title}</div>
            <div className={SuggestionCSS['pricing-div']}>
                <div className={SuggestionCSS["price"]}>&#x20B9;{pricingData.displayPrice}</div>
                <div className={SuggestionCSS["strike-price"]}>{pricingData.strikeOffPrice}</div>
                <div className={SuggestionCSS["discount"]}>{pricingData.discountPercentage}% off</div>
            </div>
        </div>
    );
}
export default Suggestion;
