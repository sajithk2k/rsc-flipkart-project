import React from "react";
import DealCardCSS from './DealCard.module.css'
import { parseImageUrl } from "../../../../Utils";

const DealCard = (props) => {
    console.log(props.rc);
    if(!props.rc)return(null);
    const imgData = props.rc.value.primaryImage;
    const imgWidth = Math.round(screen.width/2);
    const aspectRatio ="1:1";
    const dealCardDetails = props.rc.value;
    return(
        <div className={DealCardCSS['deal-card-div']}>
            <div className={DealCardCSS['img-div']}>
                <img className={DealCardCSS['deal-card-img']} src={parseImageUrl(aspectRatio,imgData.dynamicImageUrl,imgWidth)[0]}></img>
            </div>
            <div className={DealCardCSS['card-name']}>{dealCardDetails.name}</div>
            <div className={DealCardCSS['offer-title']}>{dealCardDetails.offerTitle}</div>
        </div>
    )
}
export default DealCard;