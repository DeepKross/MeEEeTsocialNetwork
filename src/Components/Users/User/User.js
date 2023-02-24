import {NavLink} from "react-router-dom";
import axios from "axios";

function User(props) {
    let follow = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{} ,{
            withCredentials: true,
            headers: {
                "API-KEY": "359caf97-209f-4b0c-abb2-8bec018c8c0b"
            }
        }).then(response =>
        {
            if (response.data.resultCode == 0) {
                props.followUser(props.id);
            }
        })

    }
    let unfollow = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "359caf97-209f-4b0c-abb2-8bec018c8c0b"
                }
            }
        ).then(response => {
            if (response.data.resultCode == 0) {
                props.unfollowUser(props.id);
            }

        })
    }

    return <div>
        <span>
            <div>
                <NavLink to={"/profile/" + props.id}>
                <img width="100px" height="100px" src={props.ava} alt="Avatar"/>
                    </NavLink>
            </div>
            <div>
                {props.followedStatus
                    ? <button onClick={unfollow}>Unfollow</button>
                    : <button onClick={follow}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{props.name}</div>
                <div>{props.status}</div>
            </span>
            <span>
                <div>City</div>
                <div>Country</div>
            </span>
        </span>
    </div>
}

export default User;