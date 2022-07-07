import React from 'react'
import Preloader from '../../Preloader/Preloader'
import style from './ProfileInfo.module.scss'


const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return( 
    <div className={style.main}>
        <div className={style.mainPhoto}>
            <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?cs=srgb&dl=pexels-philippe-donn-1133957.jpg&fm=jpg" alt="pp" />
        </div>
        
        <div className={style.description}>
            <img src={props.profile.photos.large}/>
             <div>
                <span>{props.profile.fullName}</span>
                <p>{props.profile.aboutMe}</p>
            </div>
            <div>
                <ul>
                    <a href={props.profile.contacts.vk}><li>{props.profile.contacts.vk}</li></a>
                    <li>{props.profile.contacts.twitter}</li>
                    <li>{props.profile.contacts.instagram}</li>
                    <li>{props.profile.contacts.github}</li>

                </ul>
            </div>
        </div>
      
    
    </div>
    )
}

export default ProfileInfo