const SER_USERS_DATA = 'SER_USERS_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    
 
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SER_USERS_DATA: 
          return {
                ...state,
                ...action.data,
                isAuth: true
        }
        default :
            return state

    }
        
}

export const setUserData = (userId, email, login) => ({type: SER_USERS_DATA,data:{userId, email, login}})

export default authReducer