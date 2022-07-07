/** @format */

import { connect } from 'react-redux'
import {
  setCurrentPage,
  toggleFollow,
  getUsersThunkCreator,
  followUsersThunkCreator,
  unfollowUsersThunkCreator,
} from '../../redux/users-reduser'
import Users from './Users'
import React from 'react'
import Preloader from '../Preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsersThunkCreator(
        this.props.currentPage,
        this.props.pageSize
      )
    }
  }
  onPageChanged = pageNumber => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : ''}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          toggleFollow={this.props.toggleFollow}
          followUsersThunkCreator={this.props.followUsersThunkCreator}
          unfollowUsersThunkCreator={this.props.unfollowUsersThunkCreator}
        />
      </>
    )
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     toggleFollow: (userId) => {
//       dispatch(toggleFollow(userId))
//     },

//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage : (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching))
//     }
//

// }

export default connect(mapStateToProps, {
  toggleFollow,

  setCurrentPage,

  getUsersThunkCreator,
  followUsersThunkCreator,
  unfollowUsersThunkCreator,
})(UsersContainer)
