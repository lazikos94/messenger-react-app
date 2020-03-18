import React, { Component } from "react";
import './index.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Start from "./Pages/Start";
import Home from './Pages/Home';
import NavBar from './Components/NavBar/NavBar'




class App extends Component {


  render() { 
    return ( <div className='App'>
      <NavBar />
    <BrowserRouter >
      <Switch>
        <Route exact path='/' component={Start}/>
        <Route path='/Home' component={Home}/>
      </Switch>
    </BrowserRouter> 
    </div>
     );
  }
}

 
export default App;


