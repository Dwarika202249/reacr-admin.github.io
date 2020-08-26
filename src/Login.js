import React from "react";
import "./Login.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const GooglePanelInner = props => {
 
    const responseGoogle = (googleUser) => {
        console.log(JSON.stringify(googleUser));
        const idToken = googleUser.getAuthResponse().id_token;
        const googleEmail = googleUser.profileObj.email;
        console.log('The id_token is ' + idToken)
        localStorage.setItem('idToken', idToken);
        localStorage.setItem('googleEmail', googleEmail);
        props.history.push('./App');
    };
 
    const responseGoogleLogout = (response) => {
        console.log('Logout response:' + JSON.stringify(response));
        localStorage.removeItem('idToken');
        localStorage.removeItem('googleEmail');
        console.log('Logged out')
        props.history.push()
    };
 
    if (localStorage.getItem('googleEmail') == null)
        return (<div className="login">
        <h1>Welcome to <span className="admin">Admin</span> Portal</h1>
        <h2>Login With <span className="G">G</span><span className="o">oo</span><span className="g">g</span><span className="le">le</span></h2>
            <GoogleLogin className="login-button"
                clientId="117672005048-vcekf9lt2v20glr5fcgkph6abuk4c39o.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <a href="https://dscbppimt.vercel.app/"><button className="exit_button">Exit</button></a>
        </div>)
    else {
        console.log('Logged in to Google with' + localStorage.getItem('googleEmail'));
        return (<div className="logout">
            <GoogleLogout
                clientId="117672005048-vcekf9lt2v20glr5fcgkph6abuk4c39o.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={responseGoogleLogout}
            />
        </div>)
    }
}
 
export default GooglePanelInner;
