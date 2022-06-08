import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";
import {Redirect} from "react-router-dom";
import React from "react";



export const Profile = (props: ProfilePropsType) => {
    // if (!props.isAuth) return <Redirect to={"/login"} />
    return <div className={s.content}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>
}