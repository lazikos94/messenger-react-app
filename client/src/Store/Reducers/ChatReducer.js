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