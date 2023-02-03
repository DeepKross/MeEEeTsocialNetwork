import css from './MyProfile.module.css'
import MyProfileLeft from "./Left/MyProfileLeft";
import MyProfileRight from "./Right/MyProfileRight";

function MyProfile(props) {
    //console.log(props.store.getState().)
    return (
        <div className={css.profile}>
            <MyProfileLeft/>
            <MyProfileRight />
        </div>
    );
}

export default MyProfile;