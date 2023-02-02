import css from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, changeTextActionCreator} from "../../../../redux/state";


function MyPosts(props) {

    let my_posts = props.posts.posts
        .map(e => <Post text={e.text}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let updateTextArea = (e) => {
        let toUpdt = e.target.value;
        props.dispatch(changeTextActionCreator(toUpdt));
    }


    return (
        <div className={css.myPosts}>
            <div>
                <textarea onChange={updateTextArea} value={props.posts.currentText}></textarea>
                <button onClick={addPost}> New Post </button>
            </div>
            <div>
                {my_posts}
            </div>
        </div>
    );
}

export default MyPosts;