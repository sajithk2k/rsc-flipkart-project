import React from "react";
import DealCard from "./DealCard/DealCard";
import OmuCSS from './Omu.module.css'

const Omu = (props) => {
    console.log(props.widgetData);
    
    if(!props.widgetData)return(null);
    return(
        <div className={OmuCSS['omu-div']}>
            <div className ={OmuCSS['header-div']}>
                <div>{props.widgetData.widget.data.renderableComponents[0].tracking.widgetTitle}</div>
                <img alt="link arrow image" className={OmuCSS["arrow-img"]} src="https://rukminim1.flixcart.com/www/90/90/promos/04/08/2021/a76dff7e-d644-455c-9bb1-76ab974c4c5e.png?q=90"></img>
            </div>
            <div className={OmuCSS['content-div']}>
                <DealCard rc={props.widgetData.widget.data.renderableComponents[0]}/>
                <DealCard rc={props.widgetData.widget.data.renderableComponents[1]}/>
            </div>
            <div className={OmuCSS['content-div']}>
                <DealCard rc={props.widgetData.widget.data.renderableComponents[2]}/>
                <DealCard rc={props.widgetData.widget.data.renderableComponents[3]}/>
            </div>
        </div>
    );
}

export default Omu;