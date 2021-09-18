import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from'./Home/Home';
import Product from './Product/Product';
class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path ="/product" component ={Product} />
                    <Route path ="/" component ={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;