import css from "../MyProfile.module.css"
import Preloader from "../../common/PreLoader/Preloader";

function Left(props) {
    return (
        <div className={css.left}>
            {!props.profile ? <Preloader/> :
                <div>
                    {!props.profile.photos.large ? <Preloader/> : <img alt="logo" className={css.logo}
                                                                       src={props.profile.photos.large}/>}
                    {!props.profile.aboutMe ? <Preloader/> : <div className={css.desc}>{props.profile.aboutMe}</div>}

                </div>
            }
        </div>
    );
}

export default Left;