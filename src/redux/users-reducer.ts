const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_PAGINATION_START_END = 'SET_PAGINATION_START_END'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


export type UsersType = {
    id: number,
    photos: {
        small: string,
        large: string
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    paginationStartEnd: number[]
    isFetching: boolean
}

//Автоматическая типизация AC на основе возвращаемого значения функции AC
export type ActionsProfileTypes =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof setPaginationStartEnd> |
    ReturnType<typeof toggleIsFetching>


let startPagination = 0;
let endPagination = 20;

let initialState: UserPageType = {
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
    ],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    paginationStartEnd: [startPagination, endPagination],
    isFetching: true
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
            return {...state, users: action.users}

        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}

        case "SET_TOTAL_USERS_COUNT":
            return  {...state, totalUsersCount: action.totalUsersCount}

        case "TOGGLE_IS_FETCHING":
            return  {...state, isFetching: action.isFetching}

        case "SET_PAGINATION_START_END":
            return {...state,
                paginationStartEnd: action.rerenderDirection === "left" ? [startPagination -= 20, endPagination -= 20] : [startPagination += 20, endPagination += 20]}

        default:
            return state
    }
}

export const follow = (userId: number) => {
    return {
        type: FOLLOW, userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW, userId
    } as const
}

export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS, users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT, totalUsersCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    } as const
}

export const setPaginationStartEnd = (rerenderDirection: "left" | "right") => {
    return {
        type: SET_PAGINATION_START_END, rerenderDirection
    } as const
}