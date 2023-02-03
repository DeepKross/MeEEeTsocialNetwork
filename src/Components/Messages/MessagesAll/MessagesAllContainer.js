import css from "./Messages.module.css"
import Message from "./Message/Message";
import {changeMessageActionCreator, sendMessageActionCreator} from "../../../redux/state";
import MessagesAll from "./MessagesAll";

function MessagesAllContainer(props){
    let changeText = (text) => {
        props.store.dispatch(changeMessageActionCreator(text));
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    return(
        <MessagesAll
            dialogs={props.store.getState().messagesPage.dialogs}
            sendMessage={sendMessage}
            changeText={changeText}
            currentText={props.store.getState().messagesPage.currentMessage}
        />
    );
}

export default MessagesAllContainer;