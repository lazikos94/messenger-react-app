export const CreateChatAction = (message) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('Chats').add({
            ...message,
           authorUserName: profile.userName,
           authorId: authorId,
           createdAt: new Date()
        }).then((message)=>{ 
            dispatch({type: 'CREATE_MESSAGE', message})
        }).catch((err)=>{
            dispatch({type: 'CREATE_MESSAGE_ERROR', err})
        })
        
    }
}