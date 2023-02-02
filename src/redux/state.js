
const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

export let addPostActionCreator = () => {
    return (
        {
            type: ADD_POST
        }
    );
};

export let changeTextActionCreator = (text) => {
    return(
        {
            type: CHANGE_TEXT,
            text: text
        }
    );
};

export let changeMessageActionCreator = (text) => {
    return(
        {
            type: CHANGE_MESSAGE,
            text: text
        }
    );
}

export let sendMessageActionCreator = () => {
    return(
        {type: SEND_MESSAGE}
    );
}

let store = {
    state: {
        myProfilePage: {
            posts: [
                {id: 1, text: "Hello there!"},
                {id: 2, text: "Heu, How are you guys!"},
                {id: 3, text: "today I was on the trip to London and had a great time"}
            ],
            currentText: ""
        },
        messagesPage: {
            contacts: [
                {id: "1", name: "Mike"},
                {id: "2", name: "Yurii"},
                {id: "3", name: "Anytka"}
            ],
            dialogs: [
                {id: 1, message: "Hello bra"},
                {id: 2, message: "How are you"},
                {id: 3, message: "i am fine"}
            ],
            currentMessage: ""
        }
    },

    callSubscriber() {
        console.log("nothing to render");
    },

    getState(){
        return this.state;
    },

    subscribe(observer){
        this.callSubscriber = observer;
    },

    dispatch(action){  // {type: text}
        switch (action.type){
            case ADD_POST:
                let new_Post =
                    {
                        id: this.state.myProfilePage.posts.length,
                        text: this.state.myProfilePage.currentText
                    };
                this.state.myProfilePage.posts.push(new_Post);
                this.state.myProfilePage.currentText = '';
                this.callSubscriber(this.state);
                break;
            case CHANGE_TEXT:
                this.state.myProfilePage.currentText = action.text;
                this.callSubscriber(this.state);
                break;
            case  SEND_MESSAGE:
                let new_Message =
                    {
                        id: this.state.messagesPage.dialogs.length,
                        message: this.state.messagesPage.currentMessage
                    };
                this.state.messagesPage.dialogs.push(new_Message);
                this.state.messagesPage.currentMessage = '';
                this.callSubscriber(this.state);
                break;
            case CHANGE_MESSAGE:
                this.state.messagesPage.currentMessage = action.text;
                this.callSubscriber(this.state);
                break;
            default: console.log("Unknown command")
        }
    }
}

export default store;


