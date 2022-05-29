import React from "react";
import styles from './users.module.css'
import {UsersContainerPropsType} from "./UsersContainer";
import axios from "axios";

export const UsersFuncComp = (props: UsersContainerPropsType) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })

        // props.setUsers([
        //     {
        //         id: 1,
        //         photoUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-LUnuKbi-eIY%2FXezzZvJW79I%2FAAAAAAAARZ4%2FKHk7ZQ_awiEqx9xLkJyzxx4SKG5o_9tdwCKgBGAsYHg%2Fs1600%2Ftumblr_psc030oOC51s9ulwzo2_1280.jpg&f=1&nofb=1',
        //         followed: true,
        //         fullName: 'Alex',
        //         status: 'I am a boss',
        //         location: {city: 'Kiev', country: 'Ukraine'}
        //     },
        //     {
        //         id: 2,
        //         photoUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJxhHlZn3p5IQpCh6OeH4II2GkQXqWKg0LMjjA%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1',
        //         followed: false,
        //         fullName: 'Serg K',
        //         status: 'I am good in cooking',
        //         location: {city: 'Moscow', country: 'Russia'}
        //     },
        //     {
        //         id: 3,
        //         photoUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.nswiki.org%2Fimages%2Fthumb%2FEmperor_Serg_Vorbarra.jpg%2F200px-Emperor_Serg_Vorbarra.jpg&f=1&nofb=1',
        //         followed: true,
        //         fullName: 'Dimych',
        //         status: 'Let me teach you',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     }
        // ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={ u.photos.small !== null ? u.photos.small : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822711_user_512x512.png&f=1&nofb=1"} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}