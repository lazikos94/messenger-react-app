import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
//import connects
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
//other imp
import { CreateChatAction } from '../Store/Actions/ChatAction'
import { Button } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MessageIcon from '@material-ui/icons/Message';


class Chat extends Component {
  state = {}

   componentDidMount(){
        this.setState({
        chatroomId: this.props.chatroomId
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.props.CreateChatAction(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() { 
     const { auth, message, chatroomId } = this.props;
     if (!auth.uid)  return ( <Redirect to='/' /> )

        return ( <div>
                 <form style={{borderRadius: '5px', width: '92%', backgroundColor: '#37474f', marginLeft: '4%'}}>
                    <TextareaAutosize 
                    style={{marginLeft: '4%', borderRadius: '23px', width: '92%', height: '30px', fontSize: '23px', backgroundColor: '#78909c', color: '#3e2723'}} 
                    id="message" aria-label="empty textarea" placeholder="White your message" onChange={this.handleChange} />
                  <Button style={{backgroundColor: '#00e676', color: 'white', marginLeft: '41%'}} onClick={this.handleSubmit}>SendMessage</Button>
                  </form>

                {message && message.map(message=> {
                    if (message.chatroomId == chatroomId )
                    return( <div message={message} key={message.id} >
                    <div style={{backgroundColor: '#0277bd', color: 'white', width: '69%', marginLeft: '10%', borderRadius: '25px'}}>
                    <p style={{fontSize: '23px', margin: '4%'}}>{message.message}</p>
                    <hr style={{width: '80%', color: 'white'}}/>
                    <h6 style={{marginLeft: '70%', fontSize:'15px', color: '#6200ea'}}> <MessageIcon /> {message.authorUserName}</h6>
                    </div> 
                      </div>)
                })} 

           
           </div> );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CreateChatAction: (message) => dispatch(CreateChatAction(message))
  }
}

 
const mapStateToProps = (state, myprops) =>{
  const id = myprops.match.params.id
  const message = state.firestore.ordered.Chats;
  return {
    auth: state.firebase.auth,
    chatroomId: id,
    message: message
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect( [
    {collection: 'userInfo'},
    {collection: 'Chats'}
  ] )
)(Chat);
 
