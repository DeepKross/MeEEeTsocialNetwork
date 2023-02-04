import {changeMessageActionCreator, sendMessageActionCreator} from "../../../redux/MessagePageReducer";
import MessagesAll from "./MessagesAll";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return (
        {
            dialogs: state.messagesPage.dialogs,
            currentText: state.messagesPage.currentMessage
        }
    );
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            sendMessage: () => {
                dispatch(sendMessageActionCreator());
            },
            changeText: (text) => {
                dispatch(changeMessageActionCreator(text));
            }
        }
    );
}

const MessagesAllContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesAll)

export default MessagesAllContainer;