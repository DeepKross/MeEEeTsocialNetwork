import User from "./User/User";
import axios from "axios";
const url4Avatar = "https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e";

function Users(props){
    debugger;
    let users = props.users.map(e => <User key={e.id} id={e.id} name={e.name} status={e.status}
                                           ava={url4Avatar} followedStatus={e.followed}
                                           followUser={props.followUser} unfollowUser={props.unFollowUser} ></User>);
    debugger;
    if(props.users.length === 0)
    {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
    }



    return (
        <div>
            Users will be here
            {users}
        </div>
    );
}
export default Users;