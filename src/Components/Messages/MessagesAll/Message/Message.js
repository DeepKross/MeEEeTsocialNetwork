import css from "./Message.module.css"

function Message(props) {
    return (
        <div>
            {props.text}
        </div>
    );
}

export default Message;