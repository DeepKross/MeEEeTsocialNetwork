const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

let MessagePageReducer = (state, action) => {
    switch (action.type) {
        case  SEND_MESSAGE:
            let new_Message =
                {
                    id: state.dialogs.length,
                    message: state.currentMessage
                };
            state.dialogs.push(new_Message);
            state.currentMessage = '';
            break;
        case CHANGE_MESSAGE:
            state.currentMessage = action.text;
            break;
        default: console.log("Unknown command")
    }
    return state;
}

export default MessagePageReducer;