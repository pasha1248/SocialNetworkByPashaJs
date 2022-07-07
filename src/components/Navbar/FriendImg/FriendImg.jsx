import React from 'react'
import style from './FriendImg.module.css'









const FriendImg = (props) => {
    let friendArray = props.friends.map((el,id) => {
        return  (
            <div key={id}>
                <div >
                    <img  className={style.bobImg} src="https://img3.akspic.ru/previews/8/7/7/6/6/166778/166778-spongebob-500x.jpg" alt="BOB" />
                    {el.name}
                </div> 
            </div>
            )
    })
    return (
       <div className={style.bobContainer}>
           {friendArray}
       </div>
           
    )
}

export default FriendImg