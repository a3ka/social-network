import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./redux/state";


export const rerenderEntireTree = (state: StateType, addPost: (postMessage: string) => void) => {
    ReactDOM.render(
        <App state = {state} addPost = {addPost} />,  document.getElementById('root')
    );
}
