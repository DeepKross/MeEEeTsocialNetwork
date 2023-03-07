import css from "../MyProfile.module.css"
import Preloader from "../../common/PreLoader/Preloader";
import MyProfileLeftStatus from "./MyProfileLeftStatus";

function Left(props) {
    return (
        <div className={css.left}>
            {!props.profile ? <Preloader/> :
                <div>
                    {!props.profile.photos.large ? <Preloader/> : <img alt="logo" className={css.logo}
                                                                       src={props.profile.photos.large}/>}
                    <MyProfileLeftStatus status={props.profile.aboutMe}/>

                </div>
            }
        </div>
    );
}

export default Left;