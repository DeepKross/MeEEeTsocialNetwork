import {navbarAPI} from "../api/api";

const LOGIN = "LOGIN";
const USER_NOT_AUTH = "USERNOTAUTH";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: null,
};

let ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case USER_NOT_AUTH:
            return{
                ...state,
                isAuth: false
            }
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
export let userNotAuthAC = () => {
    return (
        {
            type: USER_NOT_AUTH
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
                else{
                    dispatch(userNotAuthAC());
                }
            })
    };
};

export default ProfilePageReducer;