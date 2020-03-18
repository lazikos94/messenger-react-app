import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class Home extends Component {

    render() { 
        const { auth } = this.props;
        if (!auth.uid)  return ( <Redirect to='/' /> )
       
        return ( <div><h1>here will be Home</h1></div> );
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return {
      auth: state.firebase.auth
    }
  }
 
export default connect(mapStateToProps)(Home);