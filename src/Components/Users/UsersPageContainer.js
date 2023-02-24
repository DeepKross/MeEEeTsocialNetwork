import {connect} from "react-redux";
import {
    changePageAC,
    followAC,
    setUsersAC, totalCountAC,
    unFollowAC, fetchAC
} from "../../redux/UsersPageReducer";
import React from "react";
import axios from "axios";
import UsersPage from "./UsersPage";
import User from "./User/User";

const url4Avatar = "https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.fetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.fetch(false);
            this.props.setUsers(response.data.items);
            //this.props.totalCount(response.data.totalCount)
        })
    }

    HandleClick = (currPage) => {
        this.props.fetch(true);
        this.props.changePage(currPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.fetch(false);
            this.props.setUsers(response.data.items);
            //this.props.totalCount(response.data.totalCount)
        })
    }


    render() {
        let users = this.props.users.map(e => <User id={e.id} name={e.name} status={e.status}
                                                    ava={e.photos.small === null ? url4Avatar : e.photos.small}
                                                    followedStatus={e.followed}
                                                    followUser={this.props.followUser}
                                                    unfollowUser={this.props.unfollowUser}></User>);

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
            isFetching: state.usersPage.isFetching
        }
    );
}

const UsersPageContainer = connect(mapStateToProps, {
    followUser: followAC,
    unfollowUser: unFollowAC,
    setUsers: setUsersAC,
    changePage: changePageAC,
    totalCount: totalCountAC,
    fetch: fetchAC
})(UsersContainer);

export default UsersPageContainer;