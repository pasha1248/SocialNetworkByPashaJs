import React from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Friends from './components/friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {

  return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar friends={props.stateApp.sidebar.friends} />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/:userId' 
              element={<ProfileContainer 
              // store={props.store}
              // updateNewPostText={props.updateNewPostText}
              />} />
              <Route path='/profile' element={<ProfileContainer />} />

              <Route path='/dialogs' 
              element={<DialogsContainer />} />
              <Route path='/users' element={<UsersContainer/>} />
              <Route path='/news' element={<News />} />

              <Route path='/music' element={<Music />} />

              <Route path='/setting' element={<Setting/>} />

              <Route path='/friends' element={<Friends/>} />

            </Routes>
          </div>
        </div> 
  );
}  




export default App;
