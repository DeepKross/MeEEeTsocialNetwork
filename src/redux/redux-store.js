import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import MessagePageReducer from "./MessagePageReducer";
import UsersPageReducer from "./UsersPageReducer";
import AuthReducer from "./AuthReducer";

let reducers = combineReducers({
    myProfilePage: ProfilePageReducer,
    messagesPage: MessagePageReducer,
    usersPage: UsersPageReducer,
    auth: AuthReducer
});

let store = createStore(reducers);
window.store = store;

export default store;