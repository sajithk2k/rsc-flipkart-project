import React, { Component } from 'react';
import HomeCSS from './Home.module.css'
class Home extends React.Component {
    render() { 
        return <div class={HomeCSS.homediv}>This will be the Home Page!</div>;
    }
}
 
export default Home;