// const FOLLOW = 'FOLLOW'
// const UNFOLLOW = 'UNFOLLOW'
// const SET_USERS = 'SET_USERS'


// let initialState = {
//     users: [
//         {id: 1, 
//             imgUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
//             followed: false, fullName: 'Pasha', status: 'I am a boos', location: {
//             city: 'Lviv',
//             country: 'Ukraine'

//         }},
//         {id: 2,
//             imgUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
//             followed: true, fullName: 'Sonya', status: 'I am a boos too', location: {
//             city: 'Lviv',
//             country: 'Ukraine'

//         }},
//         {id: 3,
//             imgUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
//             followed: false, fullName: 'Dim', status: 'I am not boos yet', location: {
//             city: 'Lviv',
//             country: 'Ukraine'

//         }}
//     ]
// }


// const usersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FOLLOW:
//         return {...state,
//             users: state.users.map((el) => {
//                 if(el.id === action.userId){
//                     return {...el, followed: true}
//                 }
//                 return el
//             })
//         }
//         case UNFOLLOW: 
//         return {...state,
//             users: state.users.map((el) => {
//                 if(el.id === action.userId){
//                     return {...el, followed: false}
//                 }
//                 return el
//             })
//         }
//         case SET_USERS: {
//             return{...state, users: [...state.users, ...action.users]}
//         }
//         default:
//             return state;
//     }
// }

// export const followAC = (userId) => (
//     {
//         type: FOLLOW,
//         userId
//     }
// )

// export const unfollowAC = (userId) => (
//     {
//     type: UNFOLLOW,
//     userId
// }
// )
// export const setUsersAC = (users) => ({type: SET_USERS, users})

// export default usersReducer