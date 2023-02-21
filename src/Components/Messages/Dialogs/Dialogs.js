import css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";


function Dialogs(props) {
    console.log(props.contacts);
    let contacts = props.contacts
        .map(e => <DialogItem id={e.id} name={e.name}/>);

    return (
        <div className={css.dialogs}>
            <div className={css.header}>Dialogs</div>
            {contacts}
        </div>

    );
}

export default Dialogs;