import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

type ReducersType = typeof rootReducer


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<ReducersType>
export type ReduxStoreType = typeof store


