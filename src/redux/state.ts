import actions from "redux-form/lib/actions";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let rerenderEntireTree = (state: StateType) => {
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: any
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: any
}

type sidebarType = {
    any: any
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar?: sidebarType
    dispatch?: (state:any) => void
    _callSubscriber: ()=> void
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'Its my first Post', likesCount: 28},
            {id: 3, message: 'Whats your name', likesCount: 57}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Serg'},
            {id: 3, name: 'Nata'},
            {id: 4, name: 'Lena'},
            {id: 5, name: 'Andrey'},
            {id: 6, name: 'Sasha'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'LOL'},
            {id: 5, message: 'LOL2'},
        ],
        newMessageText: ''
    },
    sidebar: { any: []},
    _callSubscriber() {
        console.log('State changed')
    }
    ,
    dispatch (action) {
        this.profilePage = profileReducer(this.profilePage, action)
        this.dialogsPage = dialogsReducer(this.dialogsPage, action)
        this.sidebar = sidebarReducer(this.sidebar, action)

        this._callSubscriber()
    }
}

export const addPost = () => {
    let newPost =  {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export const addDialogMessage = () => {
    let newMessage =  {
        id: 6,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    rerenderEntireTree(state);
}

export const updateNewDialogMessageText = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree(state);
}



export const subsсribe = (observer: ()=>void) => {
    rerenderEntireTree = observer
}

