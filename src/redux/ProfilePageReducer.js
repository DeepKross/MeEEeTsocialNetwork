import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";
const SET_PROFILE = "SETPROFILE";

let initialState =  {
    posts: [
        {id: 1, text: "Hello there!"},
        {id: 2, text: "Heu, How are you guys!"},
        {id: 3, text: "today I was on the trip to London and had a great time"}
    ],
    currentText: "",
    profile: null
};

let ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = state.currentText;
            return {
                ...state,
                currentText: '',
                posts: [...state.posts, {id: state.posts.length, text: newPost}]
            };
        case CHANGE_TEXT:
            return {
                ...state,
                currentText: action.text
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default: return state;
    }
}

export let addPostActionCreator = () => {
    return (
        {
            type: ADD_POST
        }
    );
};

export let changeTextActionCreator = (text) => {
    return(
        {
            type: CHANGE_TEXT,
            text: text
        }
    );
};

export let setProfileAC = (profile) => {
    return(
        {
            type: SET_PROFILE,
            profile
        }
    );
};
export let setProfileTC = (userId) => {
    return (dispatch) => {
        profileAPI.showProfile(userId)
            .then(response => {
                dispatch(setProfileAC(response.data));
                //dispatch(totalCountAC(response.totalCount));
            });
    };
};

export default ProfilePageReducer;