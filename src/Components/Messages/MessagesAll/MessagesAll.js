import css from "./Messages.module.css"
import Message from "./Message/Message";
import {changeMessageActionCreator, sendMessageActionCreator} from "../../../redux/state";

function MessagesAll(props){

    let myMessages = props.messagesPage.dialogs.map(e => <Message text={e.message}></Message>);

    let changeText = (e) => {
        let text = e.target.value;
        props.dispatch(changeMessageActionCreator(text));
    }

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    return(
        <div>
            Messages
            <Message/>
            <div className={css.new_message}>
                <textarea onChange={changeText} value={props.messagesPage.currentText} className={css.new_text}></textarea>
                <button onClick={sendMessage} className={css.sender}>
                    Send
                </button>
            </div>
            <div>
                {myMessages}
            </div>
        </div>
    );
}

export default MessagesAll;