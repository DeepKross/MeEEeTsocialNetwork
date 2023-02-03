const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

let initialState = {
    contacts: [
        {id: "1", name: "Mike"},
        {id: "2", name: "Yurii"},
        {id: "3", name: "Anytka"}
    ],
    dialogs: [
        {id: 1, message: "Hello bra"},
        {id: 2, message: "How are you"},
        {id: 3, message: "i am fine"}
    ],
    currentMessage: ""
}

let MessagePageReducer = (state = initialState, action) => {
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