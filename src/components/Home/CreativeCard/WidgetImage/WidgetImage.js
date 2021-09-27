import React from 'react';
import { parseImageUrl } from '../../../../Utils';
const WidgetImage = (props) => {
    console.log(props.rc);
    console.log(props.width);
    if(!props.rc)return(null);
    const imgData = props.rc.value.image;
    const imgWidth = props.width;
    return(
            <div>
                <img alt="Widget Image" src={parseImageUrl(imgData.aspectRatio,imgData.dynamicImageUrl,imgWidth)[0]}></img>
            </div>
            );
}

export default WidgetImage;