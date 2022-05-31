import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "30613f1b-f95a-419e-8398-7317c81ab28a"
    },
    data:{}
})


export const userAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 7) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    getExactUserByLogin (login: string) {
        return instance.get(`users?term=${login}`)
    }
}

export const profileAPI = {
    getProfileData (userId: string) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}

export const followAPI = {
    unfollowUser (userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    followUser (userId: number) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    getMyData () {
        return instance.get(`auth/me`).then(response => response.data)
    }
}

