import css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";


function Dialogs(props) {

    let contacts = props.contacts
        .map(e => <DialogItem id={e.id} name={e.name}/>);

    return (

        <div className={css.dialogs}>
            Dialogs
            {contacts}
        </div>

    );
}

export default Dialogs;