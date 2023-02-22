function User(props) {

    let follow = () => {
        debugger;
        props.followUser(props.id);
    }
    let unfollow = () => {
        debugger;
        props.unfollowUser(props.id);
    }

    return <div>
        <span>
            <div>
                <img width="100px" height="100px" src={props.ava} alt="Avatar"/>
            </div>
            <div>
                {props.followedStatus
                    ? <button onClick={props.unfollowUser}>Unfollow</button>
                    : <button onClick={props.followUser}>Follow</button>}
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