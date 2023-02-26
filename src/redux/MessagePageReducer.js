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
            let newMessage = state.currentMessage;
            return {
                ...state,
                currentMessage: '',
                dialogs: [...state.dialogs, {id: state.dialogs.length, message: newMessage}]
            };
        case CHANGE_MESSAGE:
            return {
                ...state,
                currentMessage: action.text
            }
        default: return state;
    }
}

export let changeMessageActionCreator = (text) => {
    return(
        {
            type: CHANGE_MESSAGE,
            text: text
        }
    );
}

export let sendMessageActionCreator = () => {
    return(
        {type: SEND_MESSAGE}
    );
}

export default MessagePageReducer;