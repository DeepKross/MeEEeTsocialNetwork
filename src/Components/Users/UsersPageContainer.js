import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../redux/UsersPageReducer";
import UsersPage from "./UsersPage";
let mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users
        }
    );
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unFollowUser: (userId) => {
            dispatch(unFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    };
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersPageContainer;