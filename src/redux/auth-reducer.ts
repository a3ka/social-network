import {Dispatch} from "redux";
import {authAPI, userAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsProfileTypes =
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof setUserPhoto>

export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
    photo: string
}

let initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
    photo: ""
}

export const authReducer = (state: AuthType = initialState, action: ActionsProfileTypes): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.data.photo
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, login: string, email: string) => {
    return {
        // type: SET_USER_DATA, data: {userId, login, email}
        type: SET_USER_DATA, data: {userId, login, email}
    } as const
}

export const setUserPhoto = (photo:string) => {
    return {
        type: SET_USER_PHOTO, data: {photo}
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    } as const
}

export const getMyLogo = () => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.getMyData().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email))
            }
            return data.data
        })
            .then(myData => {
                // axios.get(`https://social-network.samuraijs.com/api/1.0/users?term=Maksim_KaNDeR`)
                userAPI.getExactUserByLogin(myData.login).then(response => {
                    dispatch(setUserPhoto(response.data.items[0].photos.small))
                })
            })
    }
}

