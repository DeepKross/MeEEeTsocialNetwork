import React from "react";
import {connect} from "react-redux";
import NavBar from "./NavBar";
import {loginUserTC} from "../redux/AuthReducer";
import {compose} from "redux";
import withRouter from "../hoc/withRouter";

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

export default compose(
    withRouter,
    connect(mapStateToProps, {
        loginUser: loginUserTC
    })
)(NavBarContainer);