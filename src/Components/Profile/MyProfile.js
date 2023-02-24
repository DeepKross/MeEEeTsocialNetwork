import css from './MyProfile.module.css'
import MyProfileLeft from "./Left/MyProfileLeft";
import MyProfileRight from "./Right/MyProfileRight";

function MyProfile(props) {
    return (
        <div className={css.profile}>
            <MyProfileLeft profile={props.profile}/>
            <MyProfileRight/>
        </div>
    );
}

export default MyProfile;