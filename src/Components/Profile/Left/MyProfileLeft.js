import css from "../MyProfile.module.css"

function Left() {
    return (
        <div className={css.left}>
            <img className={css.logo}
                 src="https://images.freeimages.com/365/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"/>
            <div className={css.desc}> My name is Mike Tanchuk. I am a student of KNU of faculty Cyber Science.
                Currently
                looking
                for a job as a Software Developer and that is my PetProject of Social Networking Site that I called
                MeEEeT.
            </div>
        </div>
    );
}

export default Left;