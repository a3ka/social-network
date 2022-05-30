import s from './Profile.module.css'
import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfilePageType, ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {withRouter, RouteComponentProps} from 'react-router-dom';

type MapStatePropsType = {
    profile: null | ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: string
}

type withRouterPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

// export class ProfileContainer extends React.Component<ProfilePropsType> {
export class ProfileContainer extends React.Component<withRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {userId = '23510'}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <div className={s.content}>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withURLDataContainerComponent)