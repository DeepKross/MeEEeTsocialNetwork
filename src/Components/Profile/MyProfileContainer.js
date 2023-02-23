import React from "react";
import MyProfile from "./MyProfile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileAC} from "../../redux/ProfilePageReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";


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
        debugger;
        let userId = this.props.router.params.profileId;
        //console.log(userId);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            debugger;
            this.props.setProfile(response.data);
            //this.props.totalCount(response.data.totalCount)
        })
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
    setProfile: setProfileAC
})(withRouter(ProfileContainer));

export default MyProfilePageContainer;