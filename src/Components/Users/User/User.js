import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

function User(props) {
    let follow = () => {
        usersAPI.followUser(props.id)
            .then(response => {
                if (response.resultCode == 0) {
                    props.followUser(props.id);
                }
            });

    }
    let unfollow = () => {
        usersAPI.unfollowUser(props.id)
            .then(response => {
                if (response.resultCode == 0) {
                    props.unfollowUser(props.id);
                }
            });
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