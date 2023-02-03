const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";

let ProfilePageReducer = (state, action) => {
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

export default ProfilePageReducer;