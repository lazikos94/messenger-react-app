import moment from 'moment';
import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
//import connects
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
//other imp
import { CreateChatAction } from '../../Store/Actions/ChatAction'
import { Button } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MessageIcon from '@material-ui/icons/Message';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';


class Chat extends Component {


    render() { 
     const { message, chatroomId } = this.props;
        console.log(message)
        return ( <div>

                {message && message.slice().sort((a,b)=>{
                  return a.createdAt.seconds - b.createdAt.seconds
                }).map(message=> {
                    if (message.chatroomId == chatroomId )
                    return( <div message={message} key={message.id}  >
                    <div style={{backgroundColor: '#0277bd', color: 'white', marginLeft: '4%', borderRadius: '25px'}}>
                    <img style={{width: '23px', height: '23px', borderRadius: '100%'}} src={message.authorProfileImage} alt=''></img> 
                    <p style={{ display: 'inline-block', fontSize: '16px', margin: '4%'}}>{message.message}</p>
                    <p style={{ color: 'white', marginLeft: '69%', fontSize: '14px'}}><HourglassEmptyIcon />{moment(message.createdAt.toDate()).fromNow()}</p>
                    </div> 
                    <br />
                      </div>)
                })} 

           
           </div> );
    }
}
 
const mapStateToProps = (state, myprops) =>{
  const message = state.firestore.ordered.Chats;
  return {
    message: message
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect( [
    {collection: 'userInfo'},
    {collection: 'Chats'}
  ] )
)(Chat);
 
