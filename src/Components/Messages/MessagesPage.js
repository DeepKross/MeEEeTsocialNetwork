import css from './Messages.module.css'
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesAllContainer from "./MessagesAll/MessagesAllContainer";

function MessagesPage(props) {
    return (
        <div className={css.messagesPage}>
            <div className={css.dialogs}>
                Here are list of dialogs
                <DialogsContainer/>
            </div>
            <div className={css.messages}>
                <MessagesAllContainer/>
            </div>

        </div>

    );
}

export default MessagesPage;