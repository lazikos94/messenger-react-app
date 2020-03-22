export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        firebase.auth()
                .signInWithEmailAndPassword(
                    credentials.email,
                    credentials.password
                )
                .then(()=>{ 
                    dispatch({type: 'SIGNIN_SUCCESS'})
              }).catch((err)=>{
                    dispatch({type: 'SIGNIN_ERROR', err})
                })
        
    }
}

export const signOut = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth()
                .signOut()
                .then(()=>{ 
                    dispatch({type: 'SIGN_OUT'})
              })  
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth()
                .createUserWithEmailAndPassword(
                    newUser.email,
                    newUser.password
                )
                .then((res)=>{ 
                   return firestore.collection('userInfo').doc(res.user.uid).set({
                        email: newUser.email,
                        userName: newUser.userName,
                        image:newUser.files
                    })
              })
                .then(()=>{ 
                    dispatch({type: 'SIGNUP_SUCCESS'})
              }).catch((err)=>{
                    dispatch({type: 'SIGNUP_ERROR', err})
                })
        
    }
}