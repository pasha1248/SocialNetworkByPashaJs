import React from "react"
import { Link } from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem"
import style from './Dialogs.module.css'
import Message from "./Message/Message"
 

const Dialogs = (props) => {

    

  

    let dialogsElements = props.dialogsPage.dialogs.map(el => {
        return <DialogItem key={el.id} name={el.name} id={el.id} />
        

    })


    let messagesElement = props.dialogsPage.messages.map(el => 
        <Message key={el.id} message={el.message}/>
    )

    let newMessageElement = React.createRef()

 

    let addMessage = () => {
        props.sendMessage()
        
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageBody(text)
    }

    


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>    
            <div className={style.messages}>
               {messagesElement}
            </div>
            <div className={style.containerInput}>
                <textarea onChange={onMessageChange} className={style.textInput} ref={newMessageElement} value={props.dialogsPage.newMessageText}>
                </textarea>
                <button className={style.btn} onClick={addMessage}>
                    Send message
                </button>
            </div>
           
        </div>
    )
}

export default Dialogs