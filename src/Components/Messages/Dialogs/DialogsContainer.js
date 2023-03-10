import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return (
        {
            contacts: state.messagesPage.contacts,
        }
    );
}

let mapDispatchToProps = (dispatch) => {
    return ({});
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;