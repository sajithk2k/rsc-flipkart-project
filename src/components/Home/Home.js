import React, { Component } from 'react';
import HomeCSS from './Home.module.css';
import Search from './Search/Search';
import Banner from './Banner/Banner';
import CreativeCard from './CreativeCard/CreativeCard';
import Omu from './Omu/Omu';
import Pmu from './Pmu/Pmu'
import Recent from './Recent/Recent';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            slots:[],
            widgets:{
              'SEARCH': Search,
              'BANNER':Banner,
              'CREATIVE_CARD':CreativeCard,
              'OMU':Omu,
              'PMU_V3':Pmu,
              'RECENTLY_VIEWED_V2':Recent
            }
        }
    }
    componentDidMount(){
        let self = this;
        fetch('http://localhost:3000/api/home')
        .then(response => response.json())
        .then(function(data){
          self.setState({slots:data["RESPONSE"]["slots"]});
        })
        .catch(error => {
          console.error("Error: " + error)
        });
      }
    
    render() { 
        console.log(this.state.slots);
        let slots = this.state.slots;
        if(slots.length === 0)return(null);
        return(
            <>
            {
              this.state.slots.map((slot, i) => {
                let WidgetName = this.state.widgets[slot.widget.type];
                return <WidgetName key={i} widgetData ={slot}/>
                })
            }
            </>
        ); 
    }
}
 
export default Home;