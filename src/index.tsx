import {state, subsribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPostText} from "./redux/state";



export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state = {state} addPost = {addPost}  updateNewPostText = {updateNewPostText} />,  document.getElementById('root')
    );
}

rerenderEntireTree(state)

subsribe(()=>rerenderEntireTree(state))