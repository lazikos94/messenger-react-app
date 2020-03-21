import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { getFirestore, reduxFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase, firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { Config } from '../Firebase/Config';

import { authReducer } from './Reducers/AuthReducer';
import { ChatRoomReducer } from './Reducers/ChatRoomReducer';
import { ChatReducer } from './Reducers/ChatReducer';

const conbineReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    chatRoom: ChatRoomReducer,
    chat: ChatReducer
    
})

const store = createStore(
    conbineReducer, compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(Config),
        reactReduxFirebase(Config, { useFirestoreForProfile: true, userProfile: 'userInfo', attachAuthisReady: true })
    )
    );

export default store;