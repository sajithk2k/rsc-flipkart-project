import React, { Component } from 'react';
import HomeCSS from './Home.module.css';
import Search from './Search/Search';
import Banner from './Banner/Banner';
import CreativeCard from './CreativeCard/CreativeCard';
import Omu from './Omu/Omu';
import Pmu from './Pmu/Pmu'
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            slots:{}
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
        if(this.state.slots.length === 0)return(null);
        return(
            <>
            <Search widgetData={this.state.slots[0]}/>
            <Banner widgetData={this.state.slots[1]}/>
            <CreativeCard widgetData={this.state.slots[2]}/>
            <Omu widgetData={this.state.slots[3]}/>
            <Pmu widgetData={this.state.slots[4]}/>
            </>
        ); 
    }
}
 
export default Home;