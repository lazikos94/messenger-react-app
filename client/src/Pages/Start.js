import React, { Component } from 'react';
import Register from '../Components/Auth/Register';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

class Start extends Component {


    render() { 
      const { auth } = this.props;
      if (!!auth.uid) return( <Redirect to='/Home' /> )
  
      return ( 
      <div style={{ backgroundColor: '#263238', width: '80%', height: 'fit-content', marginLeft: '10%'}}>
        <Register />      
        </div>
     
   
  );}}

const mapStateToProps = (state) =>{
    console.log(state)
    return {
      auth: state.firebase.auth
    }
  }

  export default connect(mapStateToProps)(Start);