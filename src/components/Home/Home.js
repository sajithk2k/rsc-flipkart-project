import React, { Component } from 'react';
import HomeCSS from './Home.module.css'
import Search from './Search/Search'
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            slots:[]
        }
    }
    componentDidMount(){
        let self = this;
        fetch('http://localhost:3000/api/home')
        .then(response => response.json())
        .then(function(data){
          self.setState({slots:data});
        })
        .catch(error => {
          console.error("Error: " + error)
        });
      }
    render() { 
        console.log(this.state.slots);
        return(
            <>
            <Search />
            </>
        ) 
    }
}
 
export default Home;