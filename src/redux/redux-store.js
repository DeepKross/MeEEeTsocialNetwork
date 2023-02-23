import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import MessagePageReducer from "./MessagePageReducer";
import UsersPageReducer from "./UsersPageReducer";

let reducers = combineReducers({
    myProfilePage: ProfilePageReducer,
    messagesPage: MessagePageReducer,
    usersPage: UsersPageReducer
});

let store = createStore(reducers);
window.store = store;

export default store;