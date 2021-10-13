import Button from 'react-bootstrap/Button';

function logOut() {
    sessionStorage.setItem("isLoggedIn", false);
    sessionStorage.clear();
    window.location.replace("/");
}

function Landing() {
    const username = sessionStorage.getItem('username');
    if(sessionStorage.getItem("isLoggedIn") === 'logged') {
        return(
            <>
               <h1>Welcome, {username}!</h1>
               <Button onClick={logOut}>Log Out</Button>
            </>
        );
    } else 
    return(
        <>
            <h1 className="landing-title">Register or Login</h1>
            <a href="/signin" className="btn btn-primary">Sign In</a>
            <a href="/signup" className="btn btn-primary">Sign Up</a>
        </>
    );
}

export default Landing;