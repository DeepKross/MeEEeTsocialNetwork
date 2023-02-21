import User from "./User/User";
import axios from "axios";
import React from "react";

const url4Avatar = "https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e";

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {

        let users = this.props.users.map(e => <User key={e.id} id={e.id} name={e.name} status={e.status}
                                                    ava={url4Avatar} followedStatus={e.followed}
                                                    followUser={this.props.followUser}
                                                    unfollowUser={this.props.unFollowUser}></User>);

        return <div>
            Users will be here
            {users}
        </div>
    }
}

export default Users;