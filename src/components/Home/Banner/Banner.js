import React from 'react';
import BannerCSS from './Banner.module.css';
import {parseImageUrl} from '../../../Utils'
const Banner = (props) => {
    // console.log(props.widgetData);

    if(!props.widgetData)return(null);
    const imgData = props.widgetData.widget.data.renderableComponents[0].value;
    return(
        <div className = {BannerCSS["banner-div"]}>
            <img alt = "Banner Image" className = {BannerCSS["banner-img"]} src ={parseImageUrl(imgData.aspectRatio,imgData.dynamicImageUrl,screen.width)}></img>
        </div>
    );
}

export default Banner;