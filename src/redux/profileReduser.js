const ADD_POST = 'ADD-POST'

const SET_USER_PROFILE = 'SET_USER_PROFILE'



let initialState = { 
    posts: [
    {id:1 , message: 'Pasha', like: 12},
    {id:2 , message: 'Sonya', like: 15},
    ],
    newPostText: 'it Pasha Js',
    profile: null
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile}) 

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}

const profileReducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile : action.profile}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
        
    }
     
}
export default profileReducer