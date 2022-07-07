const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'

const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false

}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
        return {...state,
            users: state.users.map((el) => {
                if(el.id === action.userId){
                    return {...el, followed: !el.followed}
                }
                return el
            })
        }
        
     
        case SET_USERS: {
            return{...state, users: action.users}
        }
        case SET_CURRENT_PAGE : {
            return{...state, currentPage: action.currentPage }

        }
        case SET_TOTAL_USERS_COUNT: {
            return{...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING : {
            return {...state , isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const toggleFollow = (userId) => (
    {
        type: TOGGLE_FOLLOW,
        userId
    }
)


export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (count) => ({type: SET_TOTAL_USERS_COUNT,count})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer