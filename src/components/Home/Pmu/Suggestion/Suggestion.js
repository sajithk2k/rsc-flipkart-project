import React from "react";
import { parseImageUrl } from "../../../../Utils";
import SuggestionCSS from './Suggestion.module.css';
const Suggestion = (props) => {
    console.log(props.rc);
    if(!props.rc)return(null);
    return(
        <div className={SuggestionCSS['suggestion-div']}>
            <img className={SuggestionCSS['suggestion-img']} src={parseImageUrl("1:1",props.rc.value.images[0].imageUrl,props.width)}></img>
            <div className={SuggestionCSS['title-div']}>{props.rc.value.titles.title}</div>
            <div className={SuggestionCSS['pricing-div']}>
                <div className={SuggestionCSS["price"]}>{props.rc.value.pricing.displayPrice}</div>
                <div className={SuggestionCSS["strike-price"]}>{props.rc.value.pricing.strikeOffPrice}</div>
                <div className={SuggestionCSS["discount"]}>{props.rc.value.pricing.discountPercentage}% off</div>
            </div>
        </div>
    );
}
export default Suggestion;