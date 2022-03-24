import React from 'react';
// @ts-ignore
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {


    let postElement = props.posts.map( (p) => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const childAddPost = () => {
        let text: any = newPostElement.current?.value;
        props.addPost(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>MY POSTS</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={childAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    );
};

