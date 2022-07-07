import React from "react"
import { connect } from "react-redux"
import Dialogs from "./Dialogs"
 
let mapStateToProps = (state) => {
    
    return {
        dialogsPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text})
        },
        sendMessage: () => {
            dispatch({type: 'ADD-MESSAGE'})    
        }
    }
}

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer