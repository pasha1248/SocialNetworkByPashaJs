import React from 'react';
import store from './redux/redux-store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"


const root = ReactDOM.createRoot(document.getElementById('root'));


    root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Provider store={store}>  
        <App 
        stateApp={store.getState()}
        //  dispatch={store.dispatch.bind(store)}
        // store={store} 
        //  updateNewPostText={store.updateNewPostText.bind(store)}
        //  addMessage={store.addMessage.bind(store)}
        //  updateNewMessageText={store.updateNewMessageText.bind(store)}
         />
        </Provider>
        </BrowserRouter>
    </React.StrictMode>
    );


