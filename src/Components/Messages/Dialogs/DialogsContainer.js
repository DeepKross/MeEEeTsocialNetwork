import Dialogs from "./Dialogs";

function DialogsContainer(props) {

    return (
        <Dialogs contacts={props.store.getState().messagesPage.contacts}/>
    );
}

export default DialogsContainer;