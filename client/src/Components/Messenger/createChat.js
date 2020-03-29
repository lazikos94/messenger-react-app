import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
//import connects
import { connect } from 'react-redux';
//other imp
import { CreateChatAction } from '../../Store/Actions/ChatAction'
import { Button } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MessageIcon from '@material-ui/icons/Message';


class CreateChat extends Component {
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

        return ( <div>
                 <form style={{borderRadius: '5px', width: '92%', marginLeft: '4%', marginTop: '5%'}}>
                    <TextareaAutosize 
                    style={{marginLeft: '4%', borderRadius: '23px', width: '92%', height: '30px', fontSize: '23px', backgroundColor: '#78909c', color: '#3e2723'}} 
                    id="message" aria-label="empty textarea" placeholder="White your message" onChange={this.handleChange} />
                  <Button style={{backgroundColor: '#00e676', color: 'white', marginLeft: '41%'}} onClick={this.handleSubmit}>SendMessage</Button>
                  </form>
           
           </div> );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CreateChatAction: (message) => dispatch(CreateChatAction(message))
  }
}

 

export default connect(null, mapDispatchToProps)(CreateChat);
 
