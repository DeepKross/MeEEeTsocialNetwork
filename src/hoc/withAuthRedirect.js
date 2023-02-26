import React from 'react'
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export const withAuthRedirect = (Component) => {

    // eslint-disable-next-line no-undef
    class RedirectComponent extends React.Component{
        render() {
            if(this.props.isAuth !== null) {
                if (!this.props.isAuth) return <Navigate to={`/login`}/>
                return <Component {...this.props}></Component>
            }
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps,{})(RedirectComponent);
    return ConnectedRedirectComponent;
};