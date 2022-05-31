import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {AuthType, setAuthUserData, setUserPhoto, toggleIsFetching} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component <HeaderPropsType>{

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false);
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)

                }
                return response.data.data.login
            })
            .then(login =>{
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?term=${login}`)
                // axios.get(`https://social-network.samuraijs.com/api/1.0/users?term=Maksim_KaNDeR`)
                    .then(response => {
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
    setAuthUserData: (userId: number, login:string, email:string) => void
    toggleIsFetching: (isFetching: boolean) => void
    setUserPhoto: (photo:string) => void
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
    setAuthUserData: setAuthUserData, toggleIsFetching, setUserPhoto}
)(HeaderContainer)
