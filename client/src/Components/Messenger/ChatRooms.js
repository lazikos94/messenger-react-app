import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
//import connects
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
//other imp
import { CreateChatRoomAction } from '../../Store/Actions/ChatRoomAction'
import { Button } from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MessengerHelper from './messengerHelper';


class ChatRooms extends Component {
  state = {}


    render() { 
     const { user, chatRooms, auth } = this.props;
     //console.log(this.props)
     if (!auth.uid)  return ( <Redirect to='/' /> )

        return ( <div style={{width: '92%', marginLeft: '4%', backgroundColor: '#212121', borderRadius: '5px'}}>
          <h1 style={{textAlign: 'center', color: 'white'}}>CHAT ROOMS</h1>
        
            <div style={{width: '80%',marginLeft: '10%', backgroundColor: '#424242', borderRadius: '23px'}}>
                
                {chatRooms && chatRooms.map(cr=> {
                  if(auth.uid == cr.authorId || auth.uid == cr.userId)
                    return( <div cr={chatRooms} key={cr.id} >
                   <NavLink to={'/Home/Messenger/Chat/' + cr.id} ><h3>CHAT ROOM {cr.userUserName} <PeopleOutlineIcon /> {cr.authorUserName}</h3> </NavLink>
                   <img style={{display: 'inline-block', width: '69px', height: '69px', borderRadius: '100%'}} src={cr.userProfileImage} alt=''></img>
                   <img style={{display: 'inline-block', marginLeft: '69%', width: '69px', height: '69px', borderRadius: '100%'}} src={cr.authorProfileImage} alt=''></img>
                     <div style={{width: '23%', marginLeft: '40%'}}> <MessengerHelper chatroomId={cr.id} userFirstName={cr.userFirstName} userProfileImage={cr.userProfileImage} /> </div>
                     <hr style={{width: '92%', marginLeft: '4%'}} />
                      </div>)
                })} 

            </div>
           </div> );
    }
}


 
const mapStateToProps = (state, myprops) =>{
  const user = state.firestore.data.userInfo;
  const chatRooms = state.firestore.ordered.ChatRooms;
  return {
    auth: state.firebase.auth,
    user: user,
    chatRooms: chatRooms
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect( [
    {collection: 'userInfo'},
    {collection: 'ChatRooms'}
  ] )
)(ChatRooms);