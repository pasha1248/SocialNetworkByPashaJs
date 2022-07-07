import React from 'react'
import { Link } from 'react-router-dom'
import FriendImg from './FriendImg/FriendImg'
import classes from './Navbar.module.css'

const Navbar = (props) => {
    return  <div  className={classes.nav}>
    <nav>
      <div className={classes.item}><Link className={classes.list} to='/profile' activeClassName={classes.active}>Profile</Link></div>
      <div className={classes.item}><Link className={classes.list} to='/dialogs'>Messages</Link></div>
      <div className={classes.item}><Link className={classes.list} to='/users'>Users</Link></div>

      <div className={classes.item}><Link className={classes.list} to='/news'>News</Link></div>
      <div className={classes.item}><Link className={classes.list} to='/music'>Music</Link></div>
      <div className={classes.item}><Link className={classes.list} to='/setting'>Settings</Link></div>
      <div className={classes.item}><Link className={classes.friend} to='/friends'>Friends</Link></div>
  </nav>
  <FriendImg friends={props.friends}/>

  </div>
}

export default Navbar