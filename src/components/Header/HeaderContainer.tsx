import React from "react";
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getMyLogo, setAuthUserData, setUserPhoto, toggleIsFetching} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component <HeaderPropsType> {

    componentDidMount() {
        this.props.getMyLogo()
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
    getMyLogo: () => void
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


export default connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {setAuthUserData, toggleIsFetching, setUserPhoto, getMyLogo})(HeaderContainer)
