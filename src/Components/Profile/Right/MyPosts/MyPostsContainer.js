import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, changeTextActionCreator} from "../../../../redux/state";


function MyPostsContainer(props) {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateTextArea = (text) => {
        props.store.dispatch(changeTextActionCreator(text));
    }


    return (
        <MyPosts updateTextArea={updateTextArea}
        addPost={addPost}
        currentText={props.store.getState().myProfilePage.currentText}
        posts={props.store.getState().myProfilePage.posts}/>
    );
}

export default MyPostsContainer;