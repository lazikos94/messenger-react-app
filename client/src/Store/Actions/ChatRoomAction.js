export const CreateChatRoomAction = (newChatroom) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('ChatRooms').add({
            ...newChatroom,
           authorProfileImage: profile.profileImage,
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