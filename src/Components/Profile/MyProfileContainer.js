import React from "react";
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {setProfileTC} from "../../redux/ProfilePageReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import withRouter from "../../hoc/withRouter";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, {setProfile: setProfileTC}),
    withAuthRedirect,
    withRouter
)(ProfileContainer);