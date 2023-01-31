import css from "../MyProfile.module.css"

function Right(){
    return(
        <div className={css.right}>
            <div className={css.posts}>
                Posts
                <div>
                    New Post
                    <div>My Post</div>
                    <div>My Post</div>
                    <div>My Post</div>
                </div>
            </div>
        </div>
    );
}

export default Right;