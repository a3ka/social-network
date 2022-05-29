import React from "react";
import styles from "./users.module.css";
import {UserPageType, UsersType} from "../../redux/users-reducer";
import {UsersContainerPropsType} from "./UsersContainer";
import user_logo from "../../assets/images/user_logo.png"

export type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    paginationStartEnd: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    renderPagination: (rerenderDirection: "left" | "right") => void

}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>

                <span onClick={(e) => {
                    props.renderPagination("left")
                }

                }> &#8592; </span>

            {pages.slice(props.paginationStartEnd[0], props.paginationStartEnd[1]).map(page => <span onClick={(e) => {
                props.onPageChanged(page)
            }} className={props.currentPage === page ? styles.selectedPage : ''}>{page} &nbsp;</span>)}

            <span onClick={(e) => {
                props.renderPagination("right")
            }
            }> &#8594; </span>
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={ u.photos.small !== null ? u.photos.small : user_logo }
                            className={styles.usersPhoto}/>
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