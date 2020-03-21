import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import connects
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
//



class Home extends Component {

    render() { 
        const { auth, userlist } = this.props;
        if (!auth.uid)  return ( <Redirect to='/' /> )
       
        return ( <div>

              {userlist && userlist.map(ul=> {
                    return( 
                    <div ul={userlist} key={ul.id} >
                      <Link to={{
                        pathname:`/Home/${ul.id}`,
                        state:{
                          userinfo:{ul}
                        }
                      }}><h1>{ul.userName}</h1> </Link>
                    </div>)
                })} 

        </div> );
    }
}

const mapStateToProps = (state) =>{
    return {
      auth: state.firebase.auth,
      userlist: state.firestore.ordered.userInfo
    }
  }
 

  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect( [
      {collection: 'userInfo'}
    ] )
  )(Home);