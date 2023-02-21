const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const url4Avatar = "https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e";


/*
users:[
    {id: 1, ava: url4Avatar, followed: true, name: "Mike", status: "Hello world", location:{city:"Starkon", country:"Ukraine"}},
    {id: 2, ava: url4Avatar, isFollowed: false, name: "Yurii",  status: "Glory to Ukraine", location:{city:"Kyiv", country:"Ukraine"}}
]
*/

let initialState =  {
    users:[]
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
        default: return state;
    }
}

export let followActionCreator = (userId) => {
    return (
        {
            type: FOLLOW,
            id: userId
        }
    );
};

export let unFollowActionCreator = (userId) => {
    return(
        {
            type: UNFOLLOW,
            id: userId
        }
    );
};

export let setUsersActionCreator = (users) => {
    return(
        {
            type: SET_USERS,
            users: users
        }
    );
};

export default UsersPageReducer;