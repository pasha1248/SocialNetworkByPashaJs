
let initialState = {
    dialogs:[
        {id:1 , name: 'Pasha'},
        {id:2 , name: 'Sonya'},
        {id:3 , name: 'Oleg'},
        {id:4 , name: 'Tom'},
        {id:5 , name: 'July'},
        {id:6 , name: 'Andry'},
    ],
    messages:[
        {id:1 , message: 'Hi'},
        {id:2 , message: 'Sonya'},
        {id:3 , message: 'Oleg'},
        {id:4 , message: 'Tom'},
        {id:5 , message: 'July'},
        {id:6 , message: 'Andry'},
    ],
    newMessageText: 'ADD MESSAGE'
}




const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage = {
                id : 1,
                message: state.newMessageText
            }
            let stateCopy = {...state,
            messages: [...state.messages, newMessage],
            newMessageText: ''}
            // stateCopy.messages = [...state.messages]
            // stateCopy.messages.push(newMessage);
            // stateCopy.newMessageText = '';
            return stateCopy
        }

        case 'UPDATE-NEW-MESSAGE-TEXT': { 
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessage
        
            return stateCopy
        }
        default:
            return state
    }
        
}


// export const updateNewMessageBodyCreator = (body) =>
//     ({ type: 'UPDATE_NEW_MESSAGE_TEXT', body: body })

export default dialogsReducer