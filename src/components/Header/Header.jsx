import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'

const Header = (props) => {
    return <header className={style.header}>
      <span className={style.logo}> By Pasha</span>
        <div className={style.loginBlock}>
          {props.isAuth ? props.login : <Link to={'/login'}  >Login</Link>}
          
        </div>
      
  </header>  
}

export default Header