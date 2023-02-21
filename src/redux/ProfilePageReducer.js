const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";

let initialState =  {
    posts: [
        {id: 1, text: "Hello there!"},
        {id: 2, text: "Heu, How are you guys!"},
        {id: 3, text: "today I was on the trip to London and had a great time"}
    ],
    currentText: ""
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
            break;
        case CHANGE_TEXT:
            return {
                ...state,
                currentText: action.text
            }
            break;
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

export default ProfilePageReducer;