import {connect} from "react-redux";
import {
    changePageAC,
    followAC, numberPagesAC,
    setUsersAC, totalCountAC,
    unFollowAC
} from "../../redux/UsersPageReducer";
import UsersPage from "./UsersPage";
let mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users,
            currentPage: state.usersPage.currentPage,
            totalUsers: state.usersPage.totalUsers,
            pageSize: state.usersPage.pageSize
        }
    );
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAC(userId));
        },
        unFollowUser: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        changePage: (page) => {
            dispatch(changePageAC(page));
        },
        totalCount: (n_users) => {
            dispatch(totalCountAC(n_users));
        }
    };
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersPageContainer;