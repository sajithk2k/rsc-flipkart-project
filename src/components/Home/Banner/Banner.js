import React from 'react';
import BannerCSS from './Banner.module.css';
import {parseImageUrl} from '../../../Utils'
const Banner = (props) => {
    console.log("Here");
    console.log(props.widgetData)
    console.log(typeof(props.widgetData))

    if(!props.widgetData)return(null);
    return(
        // (props.widgetData && <p>{props.widgetData.slotType}</p>)
        // <div>{props.widgetData["slotType"]}</div>
        <div className = {BannerCSS["banner-div"]}>
            <img alt = "Banner Image" className = {BannerCSS["banner-img"]} src ={parseImageUrl(props.widgetData.widget.data.renderableComponents[0].value.aspectRatio,props.widgetData.widget.data.renderableComponents[0].value.dynamicImageUrl,screen.width)}></img>
        </div>
    );
}

export default Banner;