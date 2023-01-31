import css from './MyPosts.module.css'
import Post from "./Post/Post";


function MyPosts(props) {
    let my_posts = props.posts
        .map( e => <Post text={e.text}/>);


    return (
        <div className={css.myPosts}>
            <div>
                <textarea></textarea>
                <button> New Post</button>
            </div>
            <div>
                {my_posts}
            </div>
        </div>
    );
}

export default MyPosts;