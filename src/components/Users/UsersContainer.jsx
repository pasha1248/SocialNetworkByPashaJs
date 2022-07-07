import { connect } from "react-redux";
import {  setCurrentPage, setIsFetching, setUsers, setUsersTotalCount, toggleFollow } from "../../redux/users-reduser";
import axios from 'axios'
import Users from './Users'
import React from "react";
import Preloader from "../Preloader/Preloader";
import { getUsers } from "../../Api/api";

class UsersContainer extends React.Component {
    
    

  componentDidMount() {
      if(this.props.users.length === 0 ){
        this.props. setIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then (data => {
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
            this.props.setIsFetching(false)
        })
  }
  }
  onPageChanged = (pageNumber) => {
      this.props. setIsFetching(true)
      this.props.setCurrentPage(pageNumber)
      getUsers(pageNumber, this.props.pageSize)
      .then (data => {
          this.props.setUsers(data.items)
          this.props.setIsFetching(false) 

      })
  }
  render() {



      return (<>
        {this.props.isFetching ? <Preloader/>  : ''}
          <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          toggleFollow={this.props.toggleFollow}
          /> 
          </>
        )
      } 
  
}

let mapStateToProps = (state) => {

  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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


export default connect(mapStateToProps,{
  toggleFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  setIsFetching
})(UsersContainer)