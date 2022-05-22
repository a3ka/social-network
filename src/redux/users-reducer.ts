const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

// export type UsersType = {
//     id: number,
//     photoUrl: string,
//     followed: boolean,
//     fullName: string,
//     status: string,
//     location: {
//         city: string,
//         country: string
//     }
// }

export type UsersType = {
    id: number,
    photos: {
        small: string,
        large:string
    },
    followed: boolean,
    name: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}


export type UserPageType = {
    users: Array<UsersType>
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsProfileTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

let initialState = {
    users: [
        // {id: 1,
        //     photoUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-LUnuKbi-eIY%2FXezzZvJW79I%2FAAAAAAAARZ4%2FKHk7ZQ_awiEqx9xLkJyzxx4SKG5o_9tdwCKgBGAsYHg%2Fs1600%2Ftumblr_psc030oOC51s9ulwzo2_1280.jpg&f=1&nofb=1',
        //     followed: true,
        //     fullName: 'Alex',
        //     status: 'I am a boss',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJxhHlZn3p5IQpCh6OeH4II2GkQXqWKg0LMjjA%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1',
        //     followed: false,
        //     fullName: 'Serg K',
        //     status: 'I am good in cooking',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.nswiki.org%2Fimages%2Fthumb%2FEmperor_Serg_Vorbarra.jpg%2F200px-Emperor_Serg_Vorbarra.jpg&f=1&nofb=1',
        //     followed: true,
        //     fullName: 'Dimych',
        //     status: 'Let me teach you',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },

    ] as Array<UsersType>
}

export const usersReducer = (state: UserPageType = initialState, action: ActionsProfileTypes): UserPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW, userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW, userId
    } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS, users
    } as const
}