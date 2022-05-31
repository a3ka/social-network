import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {AuthType, setAuthUserData, setUserPhoto, toggleIsFetching} from "../../redux/auth-reducer";
import {authAPI, userAPI} from "../../api/api";


class HeaderContainer extends React.Component <HeaderPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        authAPI.getMyData().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                this.props.setAuthUserData(id, login, email)
            }
            return data.data.login
        })
            .then(login => {
                // axios.get(`https://social-network.samuraijs.com/api/1.0/users?term=Maksim_KaNDeR`)
                userAPI.getExactUserByLogin(login).then(response => {
                    this.props.setUserPhoto(response.data.items[0].photos.small)
                })
            })

    }

    render() {
        return <Header {...this.props} />
    }
}


export type HeaderPropsType = MapStateToPropsType & MapDispatchToProps

type MapDispatchToProps = {
    setAuthUserData: (userId: number, login: string, email: string) => void
    toggleIsFetching: (isFetching: boolean) => void
    setUserPhoto: (photo: string) => void
}

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
    photo: string
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        photo: state.auth.photo
    }
}


export default connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
        setAuthUserData: setAuthUserData, toggleIsFetching, setUserPhoto
    }
)(HeaderContainer)
