import React from 'react';
import WidgetImage from './WidgetImage/WidgetImage'
import CreativeCardCSS from './CreativeCard.module.css'
const CreativeCard= (props) => {
    console.log(props.widgetData);
    if(!props.widgetData)return(null);
    return(
        <div className={CreativeCardCSS["creative-card-div"]}>
            <WidgetImage rc={props.widgetData.widget.data.renderableComponents[0]} width = {Math.round(screen.width/3)}/>
            <WidgetImage rc={props.widgetData.widget.data.renderableComponents[1]} width = {Math.round(screen.width/3)}/>
            <WidgetImage rc={props.widgetData.widget.data.renderableComponents[2]} width = {Math.round(screen.width/3)}/>
        </div>);
}
export default CreativeCard;