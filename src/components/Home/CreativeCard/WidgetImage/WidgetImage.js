import React from 'react';
import { parseImageUrl } from '../../../../Utils';
const WidgetImage = (props) => {
    console.log(props.rc);
    console.log(props.width);
    return(
            <div>
                <img alt="Widget Image" src={parseImageUrl(props.rc.value.image.aspectRatio,props.rc.value.image.dynamicImageUrl,props.width)[0]}></img>
            </div>
            );
}

export default WidgetImage;