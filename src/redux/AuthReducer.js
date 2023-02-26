import {navbarAPI} from "../api/api";

const LOGIN = "LOGIN";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

let ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

export let loginUserAC = (data) => {
    return (
        {
            type: LOGIN,
            data
        }
    );
};
export const loginUserTC = () => {
    return (dispatch) => {
        navbarAPI.loginUser()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(loginUserAC(response.data));
                }
            })
    };
};

export default ProfilePageReducer;