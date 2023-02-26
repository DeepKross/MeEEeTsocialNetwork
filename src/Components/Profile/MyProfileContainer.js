import React from "react";
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {setProfileAC, setProfileTC} from "../../redux/ProfilePageReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {profileAPI} from "../../api/api";
// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

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

const MyProfilePageContainer = connect(mapStateToProps, {
    setProfile: setProfileTC
})(withRouter(ProfileContainer));

export default MyProfilePageContainer;