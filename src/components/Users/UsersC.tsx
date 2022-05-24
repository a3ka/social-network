import React, {useState} from "react";
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

export class Users extends React.Component<UsersPropsType> {

    // in Class we cant use function, instead we use methods

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    renderPagination = (rerenderDirection: "left" | "right") => {
        this.props.setPaginationStartEnd(rerenderDirection)
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div>
            <div>

                <span onClick={(e) => {
                    this.renderPagination("left")
                }

                }> &#8592; </span>

                {pages.slice(this.props.paginationStartEnd[0], this.props.paginationStartEnd[1]).map(page => <span onClick={(e) => {
                    this.onPageChanged(page)
                }} className={this.props.currentPage === page ? styles.selectedPage : ''}>{page} &nbsp;</span>)}

                <span onClick={(e) => {
                    this.renderPagination("right")
                }
                }> &#8594; </span>
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photos.small !== null ? u.photos.small : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822711_user_512x512.png&f=1&nofb=1"}
                            className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}