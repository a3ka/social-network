import React from "react";
import {Users} from "./UsersC";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserPageType,
    UsersType
} from "../../redux/users-reducer";


// type MapStateToProps = {
//     userPage: UserPageType
// }

type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount:number) => void
}

export type UsersPropsType = UserPageType & MapDispatchToProps


let mapStateToProps = (state: AppStateType): UserPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}


let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage:number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount:number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export default connect<UserPageType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users)
