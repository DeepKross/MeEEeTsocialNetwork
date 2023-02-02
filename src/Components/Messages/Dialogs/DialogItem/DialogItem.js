import css from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <NavLink to={"/messages/" + props.id} className={css.link}>
            <div className={css.dialogItem}>
                {props.name}
            </div>
        </NavLink>

    );
}

export default DialogItem;