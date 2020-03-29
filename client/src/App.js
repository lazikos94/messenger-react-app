import React, { Component } from "react";
import './index.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Start from "./Pages/Start";
import Home from './Pages/Home';
import NavBar from './Components/NavBar/NavBar';
import Chatrooms from './Components/Messenger/ChatRooms';
import UserDetails from './Pages/UserDetails';



class App extends Component {


  render() { 
    return ( <div className='App'>
    <BrowserRouter >
      <NavBar />
      <Switch>
        <Route exact path='/' component={Start}/>
        <Route exact path='/Home' component={Home}/>
        <Route exact path='/Home/:id' component={UserDetails}/>

        <Route path='/Home/Messenger/ChatRooms' component={Chatrooms}/>
      </Switch>
    </BrowserRouter> 
    </div>
     );
  }
}

 
export default App;


