import React from "react";
import PmuCSS from './Pmu.module.css'
import PmuHeader from "./PmuHeader/PmuHeader";
import Suggestion from './Suggestion/Suggestion'
const Pmu = (props) => {
    console.log(props.widgetData);
    if(!props.widgetData)return(null);
    return(
        <div className={PmuCSS['pmu-div']}>
            <PmuHeader headerData={props.widgetData.widget.header.value}/>
            <div className={PmuCSS['pmu-content-div']}>
                <div className = {PmuCSS["single-product-div"]}>
                    <Suggestion rc ={props.widgetData.widget.data.renderableComponents[0]} width={Math.round(0.65*screen.width)}/>
                </div>
                <div className = {PmuCSS['double-product-div']}>
                    <div className ={PmuCSS['product-sm']}>
                        <Suggestion rc={props.widgetData.widget.data.renderableComponents[1]} width={Math.round(0.35*screen.width)} />
                    </div>
                    <div className={PmuCSS['product-sm']}>
                        <Suggestion rc={props.widgetData.widget.data.renderableComponents[2]} width={Math.round(0.35*screen.width)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pmu;