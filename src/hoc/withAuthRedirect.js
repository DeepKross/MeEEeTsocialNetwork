import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to={`/login`}/>
        return <Component {...props}></Component>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps,{})(RedirectComponent);
    return ConnectedRedirectComponent;
};