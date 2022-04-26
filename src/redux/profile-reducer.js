const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const profileReducer = (state, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.profilePage.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ' '
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }


    return state
}

export default profileReducer;