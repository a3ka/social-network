import React from 'react';
// @ts-ignore
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: any
    addPost: () => void
    updateNewPostText: (newText: string) => void

}

export const MyPosts = (props: MyPostsPropsType) => {


    let postElement = props.posts.map( (p) => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const childAddPost = () => {
        props.addPost()
        props.updateNewPostText('')
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        // @ts-ignore
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>MY POSTS</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText} />
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

