const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGEPAGE";
const TOTAL_COUNT = "TOTALCOUNT";
const FETCH = "FETCH";

let initialState =  {
    users:[],
    currentPage: 2,
    pageSize: 5,
    totalUsers: 100,
    isFetching: false
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
export default UsersPageReducer;