import css from "./Messages.module.css"
import Message from "./Message/Message";

function MessagesAll(props) {

    let myMessages = props.dialogs
        .map(e => <Message text={e.message}/>);

    let changeText = (e) => {
        let text = e.target.value;
        props.changeText(text);
    }

    let sendMessage = () => {
        props.sendMessage();
    }

    return (
        <div>
            <div>
                {myMessages}
            </div>
            <div className={css.new_message}>
                <textarea onChange={changeText} value={props.currentText}
                          className={css.new_text}></textarea>
                <button onClick={sendMessage} className={css.sender}>
                    Send
                </button>
            </div>

        </div>
    );
}

export default MessagesAll;