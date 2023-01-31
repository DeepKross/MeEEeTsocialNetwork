import css from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import MessagesAll from "./MessagesAll/MessagesAll";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function Messages() {

    let contacts = [
        {id: "1", name: "Mike"},
        {id: "2", name: "Yurii"},
        {id: "3", name: "Anytka"}
    ]

    let dialogs = [
        {id: 1, message: "Hello bra"},
        {id: 2, message: "How are you"},
        {id: 3, message: "i am fine"}
    ]

    return (

            <div className={css.messages}>
                <div className={css.dialogs}>
                    Here are list of dialogs
                    <Dialogs contacts={contacts}/>
                </div>
                <div>
                    Here are list or messages
                    <MessagesAll/>
                </div>
            </div>

    );
}

export default Messages;