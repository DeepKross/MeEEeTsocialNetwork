import {connect} from "react-redux";
import {addPostActionCreator, changeTextActionCreator} from "../../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
let mapStateToProps = (state) => {
    return (
        {
            posts: state.myProfilePage.posts,
            currentText: state.myProfilePage.currentText
        }
    );
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateTextArea: (text) => {
            dispatch(changeTextActionCreator(text));
        }
    };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;