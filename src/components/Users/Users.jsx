/** @format */

import React from 'react'
import style from './Users.module.scss'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { UserApi } from '../../Api/api'

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={style.container}>
      <div>
        {pages.map(el => (
          <span
            className={props.currentPage === el && style.selectedPage}
            onClick={e => props.onPageChanged(el)}
          >
            {el}
          </span>
        ))}
      </div>

      {props.users.map((el, id) => (
        <div key={id} className={style.map}>
          <span>
            <div>
              <NavLink to={'/profile/' + el.id}>
                <img
                  src={
                    el.photos.small != null
                      ? el.photos.small
                      : 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg'
                  }
                  alt='cat'
                />
              </NavLink>
            </div>
            <div>
              {id + 1}
              {el.followed ? (
                <button onClick={() => props.unfollowUsersThunkCreator(el.id)}>
                  Followed
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.followUsersThunkCreator(el.id)
                  }}
                >
                  Unfollowed
                </button>
              )}
            </div>
          </span>
          <div className={style.info}>
            <span>
              <div>
                <div>{el.name}</div>
                <div>{el.status}</div>
              </div>
            </span>
            <span>
              <div>{'el.location.country'}</div>
              <div>{'el.location.city'}</div>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
