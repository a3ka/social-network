import {
    addDialogMessage,
    addPost,
    state,
    StateType,
    subsсribe,
    updateNewDialogMessageText,
    updateNewPostText
} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state = {state}
             addPost = {addPost}
             updateNewPostText = {updateNewPostText}
             addDialogMessage = {addDialogMessage}
             updateNewDialogMessageText ={updateNewDialogMessageText}
        />,  document.getElementById('root')
    );
}

rerenderEntireTree(state)

subsсribe(()=>rerenderEntireTree(state))