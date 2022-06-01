import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    setCurrentPage,
    setPaginationStartEnd,
    toggleFollowingProgress,
    unfollow,
    UserPageType,
    getUsers, follow
} from "../../redux/users-reducer";

import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


class UsersContainer extends React.Component<UsersContainerPropsType> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    renderPagination = (rerenderDirection: "left" | "right") => {
        this.props.setPaginationStartEnd(rerenderDirection)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                paginationStartEnd={this.props.paginationStartEnd}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                onPageChanged={this.onPageChanged}
                renderPagination={this.renderPagination}
            />
        </>
    }
}



type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    setPaginationStartEnd: (rerenderDirection: "left" | "right") => void
    getUsers: (currentPage: number, pageSize: number) => void
}


export type UsersContainerPropsType = UserPageType & MapDispatchToProps


let mapStateToProps = (state: AppStateType): UserPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        paginationStartEnd: state.usersPage.paginationStartEnd,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
    setCurrentPage,
    toggleFollowingProgress,
    setPaginationStartEnd,
    getUsers
})(UsersContainer)
