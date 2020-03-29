export const ChatRoomReducer = (state={}, action) => {
    switch (action.type) {
        case 'CREATE_CHATROOM':
            alert('chatroom created')
            console.log('chatroom created', action.newChatroom)
            return state;
        case 'CREATE_CHATROOM_ERROR':
            console.log('fail', action)
            return state;
        default: return state
    }
}

export const ChatReducer = (state={}, action) => {
    switch (action.type) {
        case 'CREATE_MESSAGE':
            console.log('message sended', action.message)
            return state;
        case 'CREATE_MESSAGE_ERROR':
            console.log('fail', action)
            return state;
        default: return state
    }
}