import css from "../MyProfile.module.css"
import MyPosts from "./MyPosts/MyPosts";

function Right(props) {
    return (
        <div className={css.right}>
            <MyPosts posts={props.posts} dispatch={props.dispatch}/>
        </div>
    );
}

export default Right;