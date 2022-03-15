import React from 'react';
// @ts-ignore
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>MY POSTS</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='0' />
                <Post message='Its my first Post' likesCount='23' />
            </div>
        </div>

    );
};

