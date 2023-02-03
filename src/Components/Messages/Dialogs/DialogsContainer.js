import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

function DialogsContainer() {
    return(
    <StoreContext.Consumer>
        {
            (store) => {
                return (
                    <Dialogs contacts={store.getState().messagesPage.contacts}/>
                );
            }
        }
    </StoreContext.Consumer>);
}

export default DialogsContainer;