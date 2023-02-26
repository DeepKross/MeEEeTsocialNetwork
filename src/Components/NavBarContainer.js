import React from "react";
import {connect} from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import NavBar from "./NavBar";
import {loginUserTC} from "../redux/AuthReducer";


// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class NavBarContainer extends React.Component {

    componentDidMount() {
            this.props.loginUser();
    }

    render() {
        return <NavBar email={this.props.email}
                       isAuth={this.props.isAuth}
                       login={this.props.login}
        />
    }
}

let mapStateToProps = (state) => {
    return (
        {
            login: state.auth.login,
            email: state.auth.email,
            isAuth: state.auth.isAuth
        }
    );
}

const NavBarCont = connect(mapStateToProps, {
    loginUser: loginUserTC
})(withRouter(NavBarContainer));

export default NavBarCont;