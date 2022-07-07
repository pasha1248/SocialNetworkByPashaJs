import React from 'react'
import style from './../Dialogs.module.css'
import { Link } from 'react-router-dom'



const DialogItem = (props) => {
    return (
    <div className={style.dialog + ' ' + style.active}>
        <img src="https://img3.akspic.ru/previews/8/7/7/6/6/166778/166778-spongebob-500x.jpg" alt="a" className={style.imgItem}/>
        <Link to={'/dialogs/' + props.id}>{props.name}</Link>
    </div>

    )

}

export default DialogItem