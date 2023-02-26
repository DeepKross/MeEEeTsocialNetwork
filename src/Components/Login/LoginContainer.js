import React from "react";
import {connect} from "react-redux";
import {setProfileTC} from "../../redux/ProfilePageReducer";
import {compose} from "redux";
import Login from "./Login";

class LoginContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Login/>
    }
}

let mapStateToProps = (state) => {
    return (
        {
        }
    );
}

export default compose(
    connect(mapStateToProps, {setProfile: setProfileTC})
)(LoginContainer);