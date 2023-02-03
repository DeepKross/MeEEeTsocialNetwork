import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, changeTextActionCreator} from "../../../../redux/state";
import StoreContext from "../../../../StoreContext";

function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let updateTextArea = (text) => {
                        store.dispatch(changeTextActionCreator(text));
                    }


                    return <MyPosts updateTextArea={updateTextArea}
                             addPost={addPost}
                             currentText={store.getState().myProfilePage.currentText}
                             posts={store.getState().myProfilePage.posts}/>;
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;