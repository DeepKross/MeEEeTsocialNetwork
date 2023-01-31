import css from'./Post.module.css'

function Post(props) {
    return (
        <div className={css.post}>
            {props.text}
        </div>
    );
}

export default Post;