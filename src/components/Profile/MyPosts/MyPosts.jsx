import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReduser'
import style from './MyPosts.module.css'
import Post from './Post/Post'







const MyPosts = ( props ) => {
    
    
    let postsElement = props.posts.map( el =>
        <Post key={el.id} message={el.message} like={el.like} />
    )

    let newPostElement = React.createRef()
    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }


    return (
        <div className={style.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea 
                    onChange={onPostChange}
                     ref={newPostElement}  
                     value={props.newPostText}>

                    </textarea>
                </div>
                <div >
                    <button onClick={onAddPost} >
                    Add post
                    </button>
                </div>  
            </div>
            <div className={style.posts}>
                {postsElement}
                
            
            </div>
        </div>
    )
}

export default MyPosts