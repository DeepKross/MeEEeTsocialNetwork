import React from "react";
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {setProfileTC} from "../../redux/ProfilePageReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import withRouter from "../../hoc/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setProfile(this.props.router.params.profileId);
    }

    render() {
        return <MyProfile profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return (
        {
            profile: state.myProfilePage.profile
        }
    );
}

let withRouterProfileComponent = withRouter(ProfileContainer);

let withAuthProfileComponent = withAuthRedirect(withRouterProfileComponent);

const MyProfilePageContainer = connect(mapStateToProps, {
    setProfile: setProfileTC
})(withAuthProfileComponent);

export default MyProfilePageContainer;