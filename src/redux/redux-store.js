import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import MessagePageReducer from "./MessagePageReducer";

let reducers = combineReducers({
    myProfilePage: ProfilePageReducer,
    messagesPage: MessagePageReducer
});

let store = createStore(reducers);

export default store;