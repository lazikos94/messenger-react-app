const initialstateAuth = {
   
}

export const authReducer = (state=initialstateAuth, action) => {
    switch (action.type) {
        case 'SIGNIN_SUCCESS':
            console.log('signin success WRAIOS');
            return {
                ...state,
            }
        case 'SIGNIN_ERROR':
            console.log('signin failed FUCK xD');
            alert('login failed')
            return {
                ...state,
            }
        case 'SIGN_OUT':
            console.log('signOut success');
            alert('to mpoulo')
            return state; 

        case 'SIGNUP_SUCCESS':
            console.log('signup success WRAIOS');
            return {
                ...state,
            } 
        case 'SIGNUP_ERROR':
            alert('failll')
            console.log('signup failed XAXA');
            return {
                ...state,
            }  
        default:
            return state;
    }
}

