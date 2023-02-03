import {changeMessageActionCreator, sendMessageActionCreator} from "../../../redux/state";
import MessagesAll from "./MessagesAll";
import StoreContext from "../../../StoreContext";

function MessagesAllContainer(props){
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let changeText = (text) => {
                        store.dispatch(changeMessageActionCreator(text));
                    }

                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator())
                    }
                    return(
                        <MessagesAll
                            dialogs={store.getState().messagesPage.dialogs}
                            sendMessage={sendMessage}
                            changeText={changeText}
                            currentText={store.getState().messagesPage.currentMessage}
                        />
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default MessagesAllContainer;