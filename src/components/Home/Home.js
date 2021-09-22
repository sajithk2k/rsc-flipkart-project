import React, { Component } from 'react';
import HomeCSS from './Home.module.css'
import Search from './Search/Search'
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        let self = this;
        fetch('http://localhost:3000/api/home')
        .then(response => response.json())
        .then(function(data){
          self.setState({data:data});
        })
        .catch(error => {
          console.error("Error: " + error)
        });
      }
    render() { 
        console.log(this.state.data);
        return(
            <>
            <Search />
            </>
        ) 
    }
}
 
export default Home;