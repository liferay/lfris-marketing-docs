import React from 'react';
import { handleLogin, isLoggedIn, handleLogout } from '../../services/auth'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: isLoggedIn()
        }
        this._handleLogin = this._handleLogin.bind(this);

        this._handleLogout = this._handleLogout.bind(this);
    }

    _handleLogin = () => {
        handleLogin()
        this.setState({login: isLoggedIn()})
    }

    _handleLogout = () => {
        handleLogout()
        this.setState({login: isLoggedIn()})
    }

    render() {
       return(
           !this.state.login ? 
            (<button className="btn btn-sm btn-outline-light font-weight-bold mx-3" onClick={handleLogin}>
                Login
            </button>) :
            (<button className="btn btn-sm btn-outline-light font-weight-bold mx-3" onClick={handleLogout}>
            Logout
             </button>)
        )
    }
}

export default Login;
