import User from "./User/User";
import axios from "axios";
import React from "react";
import css from "./UsersPage.module.css"

const url4Avatar = "https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            debugger;
            this.props.setUsers(response.data.items);
            //this.props.totalCount(response.data.totalCount)
        })
    }

    HandleClick = (currPage) => {
        debugger;
        this.props.changePage(currPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currPage}&count=${this.props.pageSize}`).then(response => {
            debugger;
            this.props.setUsers(response.data.items);
            //this.props.totalCount(response.data.totalCount)
        })
    }


    render() {
        debugger;
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let users = this.props.users.map(e => <User key={e.id} id={e.id} name={e.name} status={e.status}
                                                    ava={url4Avatar} followedStatus={e.followed}
                                                    followUser={this.props.followUser}
                                                    unfollowUser={this.props.unFollowUser}></User>);

        return <div>
            Users will be here
            {users}
            <div>
                {pages.map(e => <button className={this.props.currentPage === e && css.selected}
                                        onClick={() => {this.HandleClick(e)}}>{e}</button>)}
            </div>

        </div>
    }
}

export default Users;