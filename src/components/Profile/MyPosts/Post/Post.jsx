import React from 'react'
import style from './Post.module.css'



const Post = (prop) => {
    
    return (
        <div>
            <div className={style.item}>
                        {prop.message}
            </div>
            <span>like: {prop.like}</span>
        </div>
    )
      
}

export default Post