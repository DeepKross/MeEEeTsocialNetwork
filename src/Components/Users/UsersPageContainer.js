import {connect} from "react-redux";
import {
    changePageAC, getUsersTC, followTC, unfollowTC
} from "../../redux/UsersPageReducer";
import React from "react";
import UsersPage from "./UsersPage";
import User from "./User/User";

const url4Avatar = "https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    HandleClick = (currPage) => {
        this.props.changePage(currPage);
        this.props.getUsers(currPage, this.props.pageSize);
    }


    render() {
        let users = this.props.users.map(e => <User id={e.id} name={e.name} status={e.status}
                                                    ava={e.photos.small === null ? url4Avatar : e.photos.small}
                                                    followedStatus={e.followed}
                                                    followUser={this.props.followUser}
                                                    unfollowUser={this.props.unfollowUser}
                                                    usersFollowingInProgress={this.props.usersFollowingInProgress}
        ></User>);

        return <UsersPage
            users={users}
            totalUsers={this.props.totalUsers}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            handleClick={this.HandleClick}
            isFetching={this.props.isFetching}
        />
    }
}

let mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users,
            currentPage: state.usersPage.currentPage,
            totalUsers: state.usersPage.totalUsers,
            pageSize: state.usersPage.pageSize,
            isFetching: state.usersPage.isFetching,
            usersFollowingInProgress: state.usersPage.followingInProgress,
        }
    );
}

const UsersPageContainer = connect(mapStateToProps, {
    followUser: followTC,
    unfollowUser: unfollowTC,
    changePage: changePageAC,
    getUsers: getUsersTC
})(UsersContainer);

export default UsersPageContainer;