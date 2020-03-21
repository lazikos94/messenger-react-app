

export const ChatRoomReducer = (state={newchatroom:''}, action) => {
    switch (action.type) {
        case 'CREATE_CHATROOM':
            console.log('chatroom created', action.newChatroom)
            return {
                ...state,
                newchatroom:action.newChatroom
            };
        case 'CREATE_CHATROOM_ERROR':
            console.log('fail', action)
            return state;
        default: return state
    }
}