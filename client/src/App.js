import React, { Component } from "react";
import './index.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Start from "./Pages/Start";
import Home from './Pages/Home';
import CreateChatRoom from './Components/CreateChatRoom';
import NavBar from './Components/NavBar/NavBar';
import Chat from './Components/Chat';



class App extends Component {


  render() { 
    return ( <div className='App'>
    <BrowserRouter >
      <NavBar />
      <Switch>
        <Route exact path='/' component={Start}/>
        <Route exact path='/Home' component={Home}/>
        <Route exact path='/Home/:id' component={CreateChatRoom}/>
        <Route path='/Home/Chat/:id' component={Chat}/>
      </Switch>
    </BrowserRouter> 
    </div>
     );
  }
}

 
export default App;


