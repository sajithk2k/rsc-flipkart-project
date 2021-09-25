import React from "react";
import DealCardCSS from './DealCard.module.css'
import { parseImageUrl } from "../../../../Utils";

const DealCard = (props) => {
    console.log(props.rc)
    return(
        <div className={DealCardCSS['deal-card-div']}>
            <div className={DealCardCSS['img-div']}>
                <img className={DealCardCSS['deal-card-img']} src={parseImageUrl("1:1",props.rc.value.primaryImage.dynamicImageUrl,Math.round(screen.width/2))}></img>
            </div>
            <div className={DealCardCSS['card-name']}>{props.rc.value.name}</div>
            <div className={DealCardCSS['offer-title']}>{props.rc.value.offerTitle}</div>
        </div>
    )
}
export default DealCard;