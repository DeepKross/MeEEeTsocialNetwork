import css from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import MessagesAll from "./MessagesAll/MessagesAll";

function MessagesPage(props) {
    return (
        <div className={css.messagesPage}>
            <div className={css.dialogs}>
                Here are list of dialogs
                <Dialogs messagesPage={props.messagesPage}/>
            </div>
            <div className={css.messages}>
                <MessagesAll messagesPage={props.messagesPage} dispatch={props.dispatch}/>
            </div>

        </div>

    );
}

export default MessagesPage;