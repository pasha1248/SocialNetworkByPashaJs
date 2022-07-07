/** @format */

import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import authReducer from './auth-reducer'
import dialogsReducer from './dialogsReduser'
import profileReducer from './profileReduser'
import sidebarReducer from './sidebarReducer'
import usersReducer from './users-reduser'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
