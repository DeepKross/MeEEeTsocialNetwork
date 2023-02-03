import css from "../MyProfile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Right(props) {
    return (
        <div className={css.right}>
            <MyPostsContainer/>
        </div>
    );
}

export default Right;