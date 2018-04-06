import React from 'react';
import login from "../services/facebookLogin";
class Login extends React.Component {
    render() {
        return (
            <div className="login-form">
                <button onClick={login}> Login </button>
            </div>
        )
    }
}
export default Login