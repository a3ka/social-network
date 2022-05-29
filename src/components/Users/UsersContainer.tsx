import React from "react";
import {UsersAPIComponent} from "./UsersAPIComponent";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setPaginationStartEndAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
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
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setPaginationStartEnd: (rerenderDirection: "left" | "right") => void
}


export type UsersContainerPropsType = UserPageType & MapDispatchToProps


let mapStateToProps = (state: AppStateType): UserPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        paginationStartEnd: state.usersPage.paginationStartEnd,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        setPaginationStartEnd: (rerenderDirection: "left" | "right") => {
           dispatch(setPaginationStartEndAC(rerenderDirection))
        }

    }
}

export default connect<UserPageType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
