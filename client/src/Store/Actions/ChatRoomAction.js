export const CreateChatRoomAction = (newChatroom) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        //firestore.collection('rooms').doc(stuff.roomName+stuff.id).set({
          //  roomName:stuff.roomName,
         //   creatorfirstName:profile.firstName,
           // creatorlastName:profile.lastName
        firestore.collection('ChatRooms').add({
            ...newChatroom,
           authorUserName: profile.userName,
           authorId: authorId,
           createdAt: new Date()
        }).then((newChatroom)=>{ 
            dispatch({type: 'CREATE_CHATROOM', newChatroom})
        }).catch((err)=>{
            dispatch({type: 'CREATE_CHATROOM_ERROR', err})
        })
        
    }
}