import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
   
   
    return( 
    <div>
        <ProfileInfo profile={props.profile}/>  
        <MyPostsContainer 
        // store={props.store} 
        // newPostText={props.profilePage.newPostText} 
        // dispatch={props.dispatch}
        // updateNewPostText={props.updateNewPostText}
        />
    </div>
    )
}

export default Profile