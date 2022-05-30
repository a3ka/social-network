import React from "react";
import {UsersAPIComponent} from "./UsersAPIComponent";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setPaginationStartEnd,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserPageType,
    UsersType
} from "../../redux/users-reducer";


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


// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers:(users: Array<UsersType>) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage:number) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount:number) => {
//             dispatch(setTotalUsersCount(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetching(isFetching))
//         },
//         setPaginationStartEnd: (rerenderDirection: "left" | "right") => {
//            dispatch(setPaginationStartEnd(rerenderDirection))
//         }
//
//     }
// }

export default connect<UserPageType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    setPaginationStartEnd
})(UsersAPIComponent)
