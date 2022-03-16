import React from 'react';
// @ts-ignore
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";


export const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 1, message: 'Its my first Post', likesCount: 28}
    ]

    let postElement = posts.map( (p) => <Post message={p.message} likesCount={p.likesCount} />)

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
                {postElement}
            </div>
        </div>

    );
};

