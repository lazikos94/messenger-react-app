import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
//components
import Login from '../Auth/Login';
import NavBarButton from '../NavBar/NavBarButton';
//materia ui
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';


const NavbarChoise = (props) => {

    const { auth } = props;
    const Choise = auth.uid ? <NavBarButton /> : <Login />

  return ( <div>
      <AppBar position="static" style={{backgroundColor:'#37474f', height: '46px', width: '100%', borderRadius: '20px'}}>
            <Grid container>
            <Grid item style={{ width: '25%', marginLeft: '5%', height: '46px' }}>
                <div style={{ width: '75%', marginTop: '-10px', height: '10px'}}><NavLink style={{color: 'white'}} to='/Home'><h3 >@ MESSENGER APP</h3></NavLink></div>
            </Grid>
            <Grid item style={{ width: '45%', marginLeft: '20%',height: '46px'  }}>
            {Choise}
            </Grid>
            </Grid>
           
      </AppBar>
      
  </div>
  );
}

const mapStateToProps = (state) => {
    return {
         auth: state.firebase.auth
    }
  }
   
  export default connect(mapStateToProps)(NavbarChoise);