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

class CreateChatRoom extends Component {
  state = {}


    componentDidMount(){
        this.setState({
        userId: this.props.user.id,
        userProfileImage: this.props.user.profileImage,
        userUserName: this.props.user.userName,
        })
    }

  handleSubmit =(e) => {
    e.preventDefault();
    this.props.CreateChatRoomAction(this.state)

}

CchatRoom = () => {
    if(
       this.props.mychatrooms &&
       this.props.mychatrooms.find( (mychatroom) =>
       mychatroom.userId === this.state.userId && mychatroom.authorId === this.props.auth.uid ))
        return true 
        else return false
    }


    render() { 
     const { user } = this.props;
     const gochatroom = this.CchatRoom() ? ( 
        <NavLink to='/Home/Messenger/ChatRooms/'> <Button style={{backgroundColor: 'yellow'}}>SendMessege</Button> </NavLink>
     ):
      (<Button 
        onClick={this.handleSubmit} style={{borderRadius: '23px', color: 'white', backgroundColor: 'red'}}>
            Create Chat Room{user.userName}
            </Button>);

        return ( <div>
        {gochatroom}
                  

           </div> );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CreateChatRoomAction: (newChatroom) => dispatch(CreateChatRoomAction(newChatroom))
  }
}

 
const mapStateToProps = (state, user) =>{
  const mychatrooms = state.firestore.ordered.ChatRooms;
 console.log(state)
  return {
    auth: state.firebase.auth,
    mychatrooms: mychatrooms,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect( [
    {collection: 'userInfo'},
    {collection: 'ChatRooms'},
    {collection: 'Chats'}
  ] )
)(CreateChatRoom);