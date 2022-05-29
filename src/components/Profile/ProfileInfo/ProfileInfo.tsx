import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";


type ProfileInfo = {
    profile: null | ProfileType
}

export const ProfileInfo = (props: ProfileInfo) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (<div>
        <div>
            <img src='https://wallpapercave.com/wp/Gu7c5fS.jpg' width="870" height="440"></img>
        </div>
        <div>
            <img src={props.profile.photos.large}/>
            <br/>Name: {props.profile.fullName}
            <br/>About me: {props.profile.aboutMe}
            <br/>Contacts: {props.profile.contacts.vk}
            <br/>Looking for a job? {props.profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
    </div>)
}
