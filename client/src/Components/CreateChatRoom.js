import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
//import connects
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
//other imp
import { CreateChatRoomAction } from '../Store/Actions/ChatRoomAction'
import { Button } from '@material-ui/core';

class CreateChatRoom extends Component {
  state = {}

   componentDidMount(){
    this.setState({
      userId: this.props.userId
    })
}

  handleSubmit =(e) => {
    e.preventDefault();
    this.props.CreateChatRoomAction(this.state)

}

    render() { 
     const { user, mychatroom, auth } = this.props;
     if (!auth.uid)  return ( <Redirect to='/' /> )

        return ( <div>
        <div style={{ color: 'white', width: '80%',marginLeft: '10%',display: 'inline-block', backgroundColor: '#455a64', borderRadius: '23px'}}> 
              <div >
                  <h1>{user.userName}</h1>
                  <h3>{user.email}</h3>
              </div>
              <div>
                  <Button onClick={this.handleSubmit} style={{borderRadius: '23px', color: 'white', backgroundColor: 'red'}}>CONTACT WITH</Button>
              </div>
            </div>
            <h1>My chatRooms</h1>
            <div style={{width: '80%',marginLeft: '10%', backgroundColor: '#455a64', borderRadius: '23px'}}>
                
                {mychatroom && mychatroom.map(mychatroom=> {
                  if(auth.uid == mychatroom.authorId || auth.uid == mychatroom.userId)
                    return( <div mychatroom={mychatroom} key={mychatroom.id} >
                   <NavLink to={'/Home/Chat/' + mychatroom.id} ><h1>{mychatroom.authorUserName}</h1> </NavLink>
                      </div>)
                })} 

            </div>
           </div> );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CreateChatRoomAction: (newChatroom) => dispatch(CreateChatRoomAction(newChatroom))
  }
}

 
const mapStateToProps = (state, myprops) =>{
  const id = myprops.match.params.id
  const users = state.firestore.data.userInfo;
  const user = users? users[id] : null;
  const mychatroom = state.firestore.ordered.ChatRooms;
  return {
    auth: state.firebase.auth,
    user: user,
    userId: id,
    mychatroom: mychatroom
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect( [
    {collection: 'userInfo'},
    {collection: 'ChatRooms'}
  ] )
)(CreateChatRoom);