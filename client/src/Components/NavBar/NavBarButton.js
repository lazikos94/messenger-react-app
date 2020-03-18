import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOut from '../Auth/LogOut';
//material ui
import Grid from '@material-ui/core/Grid';

class NavBarButton extends Component {

    render() {
        const {profile} = this.props; 

        return ( <div  > 
            <Grid container style={{ width: '69%', marginLeft: '20%',height: '46px'}}>
                <Grid item style={{height: '100%', width: '33%', marginLeft: '10%'}}>
                        <h3 style={{color: 'white', fontSize: '20px',marginLeft: '10%', marginTop: '10px'}}>{profile.userName}</h3>
                </Grid>
                    

                <Grid item style={{height: '100%', width: '33%', marginLeft: '10%'}}> <LogOut /> </Grid>
            </Grid>  
        </div> );
    }
}
 
const mapStateToProps = (state) =>{
    return {
      profile: state.firebase.profile,
    }
  }

export default connect(mapStateToProps)(NavBarButton);