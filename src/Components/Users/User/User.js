import {NavLink} from "react-router-dom";

function User(props) {

    return <div>
        <span>
            <div>
                <NavLink to={"/profile/" + props.id}>
                <img width="100px" height="100px" src={props.ava} alt="Avatar"/>
                    </NavLink>
            </div>
            <div>
                {props.followedStatus
                    ? <button disabled={props.usersFollowingInProgress.some(id => id === props.id)}
                              onClick={() => {props.unfollowUser(props.id)}}>Unfollow</button>
                    : <button disabled={props.usersFollowingInProgress.some(id => id === props.id)}
                              onClick={() => {props.followUser(props.id)}}>Follow</button>}
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