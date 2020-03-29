import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CreateChatRoom from '../Components/Messenger/createChatRoom'



class UsersDetails extends Component {
   state={}

     render(){

    const { user, id } = this.props;
    console.log(user);
    if(user)
        return(
          <div>
          <div  style={{ width: '69%', marginLeft: '16%'}}>
              <img style={{ width:'146px', height:'146px', position: 'relative', marginLeft: '40%',borderRadius: '50%', borderStyle: 'solid', borderColor: '#039be5'}}
              src={user.profileImage} alt=''></img>
          </div>
          <div style={{backgroundColor: '#212121', width: '69%', height: '169px', marginLeft: '16%', borderRadius:'23px', marginTop:'-5%' }}>
               <hr style={{width: '69%', marginLeft: '16%'}} />
               <h3 style={{textAlign:'center', color:'white', marginTop:'5%'}}>{user.userName}</h3>
            < hr style ={{width: '92%', marginLeft: '4%'}} />    
                   <CreateChatRoom user={user} id={id} />   
           </div>
      </div>
        )
        else return <div> user died </div>
        }}

     

        const mapStateToProps = (state, ownprops) =>{ 
          const id = ownprops.match.params.id
          const users = state.firestore.data.userInfo
          const user = users ? users[id] : null;
          console.log(users);
          //const user = state.firestore.data.userInfo.find(user=> lalala)
          console.log(users)
          return {
            auth: state.firebase.auth,
            user: user,
            id: id
          }
        }

        export default compose(
          connect(mapStateToProps),
          firestoreConnect( [
            {collection: 'userInfo'},
          ] )
        )(UsersDetails);
       

      