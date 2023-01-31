import css from "../MyProfile.module.css"
import MyPosts from "./MyPosts/MyPosts";

function Right() {

    let posts =
        [
            {id: 1, text: "Hello there!"},
            {id: 2, text: "Heu, How are you guys!"},
            {id: 3, text: "today I was on the trip to London and had a great time"}
        ];

    return (
        <div className={css.right}>
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Right;