import css from './MyProfile.module.css'
import MyProfileLeft from "./Left/MyProfileLeft";
import MyProfileRight from "./Right/MyProfileRight";

function MyProfile(props) {
    //console.log(props.store.getState().)
    return (
        <div className={css.profile}>
            <MyProfileLeft/>
            <MyProfileRight store={props.store}/>
        </div>
    );
}

export default MyProfile;