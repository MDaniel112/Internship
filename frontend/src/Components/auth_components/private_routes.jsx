import { Route, Redirect } from "react-router";

const PrivateRoute = (props) => {
    console.log(sessionStorage.getItem("isLoggedIn"))
    if(sessionStorage.getItem("isLoggedIn") === true) {
        console.log(props.path)
        return (
            <Route path={props.path} component={props.component}/>
          );
    } else {
        return(
            <Redirect to="/signin" />
        );
    }

    // return localStorage.getItem("isLoggedIn") ? (
    //   <Route {...props} />
    // ) : (
    //   <Redirect
    //     to="/signin"
    //   />
    // );
};

export default PrivateRoute;