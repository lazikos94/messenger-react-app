import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import connects
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import CreateChatRoom from '../Components/Messenger/createChatRoom'
//



class Home extends Component {

    render() { 
        const { auth, userlist } = this.props;
        if (!auth.uid)  return ( <Redirect to='/' /> )
       console.log(userlist)
        return ( <div>

              {userlist && userlist.map(ul=> {
                    return( <div ul={userlist} key={ul.id} >
                      <img style={{width: '69px', height: '69px', borderRadius: '100%'}} src={ul.profileImage} alt=''></img>
                   <NavLink style={{color: 'white'}} to={'/Home/' + ul.id} >
                     <h3>{ul.email}</h3><h1>{ul.userName}</h1> </NavLink>
                     
                     <CreateChatRoom user={ul} />
                    
                     <hr style={{color: 'white'}} />
                     <hr style={{color: 'white'}} />
                     
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