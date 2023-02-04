import css from './MyPosts.module.css'
import Post from "./Post/Post";


function MyPosts(props) {

    let my_posts = props.posts
        .map(e => <Post text={e.text}/>);

    let addPost = () => {
        props.addPost();
    }

    let updateTextArea = (e) => {
        let text = e.target.value;
        props.updateTextArea(text);
    }


    return (
        <div className={css.myPosts}>
            <div>
                <textarea onChange={updateTextArea} value={props.currentText}></textarea>
                <button onClick={addPost}> New Post </button>
            </div>
            <div>
                {my_posts}
            </div>
        </div>
    );
}

export default MyPosts;