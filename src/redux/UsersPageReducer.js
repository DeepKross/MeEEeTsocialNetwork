import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGEPAGE";
const TOTAL_COUNT = "TOTALCOUNT";
const FETCH = "FETCH";
const FOLLOWING_IN_PROGRESS ="FOLLOWINGINPROGRESS";

let initialState =  {
    users:[],
    currentPage: 2,
    pageSize: 5,
    totalUsers: 100,
    isFetching: false,
    followingInProgress: [],
};

let UsersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if(e.id === action.id){
                        return {...e, followed: true}
                    }
                    else return e;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if(e.id === action.id){
                        return {...e, followed: false}
                    }
                    else return e;
                })
            }
        case SET_USERS:{
            return {
                ...state,
                users: [...action.users]
            }
        }
        case CHANGE_PAGE:{
            return {
                ...state,
                currentPage: action.page
            }
        }
        case TOTAL_COUNT:
            return {
                ...state,
                totalUsers: action.n_users
            }
        case FETCH:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default: return state;
    }
}

export let followAC = (userId) => {
    return (
        {
            type: FOLLOW,
            id: userId
        }
    );
};

export let unFollowAC = (userId) => {
    return(
        {
            type: UNFOLLOW,
            id: userId
        }
    );
};

export let setUsersAC = (users) => {
    return(
        {
            type: SET_USERS,
            users
        }
    );
};

export let changePageAC = (page) => {
    return(
        {
            type: CHANGE_PAGE,
            page
        }
    );
};
export let totalCountAC = (n_users) => {
    return(
        {
            type: TOTAL_COUNT,
            n_users
        }
    );
};
export let fetchAC = (isFetching) => {
    return(
        {
            type: FETCH,
            isFetching
        }
    );
};
export let followingProgressAC = (isFetching,userId) => {
    return(
        {
            type: FOLLOWING_IN_PROGRESS,
            isFetching,
            userId
        }
    );
};
export let getUsersTC = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(fetchAC(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(fetchAC(false));
                dispatch(setUsersAC(response.items));
                //dispatch(totalCountAC(response.totalCount));
            })
    };
};

export let followTC = (userId) => {
    return (dispatch) => {
        dispatch(followingProgressAC(true, userId));
        usersAPI.followUser(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(followAC(userId));
                }
                dispatch(followingProgressAC(false, userId));
            });
    };
};
export let unfollowTC = (userId) => {
    return (dispatch) => {
        dispatch(followingProgressAC(true, userId));
        usersAPI.unfollowUser(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unFollowAC(userId));
                }
                dispatch(followingProgressAC(false, userId));
            });
    };
};
export default UsersPageReducer;