import dialogsReducer from "./dialogsReduser"
import profileReducer from "./profileReduser"
import sidebarReducer from "./sidebarReducer"

const ADD_POST = 'ADD-POST'


let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1 , message: 'Pasha', like: 12},
                {id:2 , message: 'Sonya', like: 15},
            ],
            newPostText: 'it Pasha Js'
        },
        messagesPage: {
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
        },
        sidebar: {
            friends:[
                {name: 'Pasha'},
                {name: 'Sonya'},
                {name: 'Dimich'},
            ],
        }
    },
    getState() {
        return this._state
    },
    rerenderEntireTree() {
        console.log('state change')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

//--!


    // addPost() {
        
    // },
    // updateNewPostText(newText) {
        
    // },
    // addMessage() {
    
    // },
    // updateNewMessageText(newMessage) {},
    
    
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebar, action)


        this._rerenderEntireTree(this._state)

        // if(action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         like: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._rerenderEntireTree(this._state)
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = action.newText
        //     this._rerenderEntireTree(this._state)
        //   if (action.type === 'ADD-MESSAGE') {
        //     let newMessage = {
        //         id : 1,
        //         message: this._state.messagesPage.newMessageText
        //     }
        //     this._state.messagesPage.messages.push(newMessage);
        //     this._state.messagesPage.newMessageText = '';
        //     this._rerenderEntireTree(this._state)
        // } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
        //     this._state.messagesPage.newMessageText = action.newMessage
        //     this._rerenderEntireTree(this._state)
        // }

    }

}






window.state = store


export default store