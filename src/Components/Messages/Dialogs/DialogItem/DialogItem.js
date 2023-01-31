import css from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return(
        <div className={css.dialogItem}>
            <NavLink to={"/messages/" + props.id}> {props.name} </NavLink>
        </div>
    );
}

export default DialogItem;