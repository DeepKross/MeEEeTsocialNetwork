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
            let new_Post =
                {
                    id: state.posts.length,
                    text: state.currentText
                };
            state.posts.push(new_Post);
            state.currentText = '';
            break;
        case CHANGE_TEXT:
            state.currentText = action.text;
            break;
        default: console.log("Unknown command")
    }
    return state;
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