import 'firebase/auth'
import React from 'react'
import { firebase } from '@firebase/app'
import { navigate } from 'gatsby'
import LogoutContainer from '../LogoutContainer'

var firebaseConfig = {
apiKey: "AIzaSyAr72TWuE2qciFQSbo8lV-rSJciZ5GSuR4",
authDomain: "lfris-marketing-docs.firebaseapp.com",
databaseURL: "https://lfris-marketing-docs.firebaseio.com",
projectId: "lfris-marketing-docs",
storageBucket: "",
messagingSenderId: "744937136612",
appId: "1:744937136612:web:496560d4b822e967"
};

firebase.initializeApp(firebaseConfig);

class Login extends React.Component {

    constructor(props) {
        super(props);
        this._handleLogin = this._handleLogin.bind(this);
        this._handleLogout = this._handleLogout.bind(this);

        this.state = {
            user: null,
        }
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setUser(firebase.auth().currentUser)
			}
		})
    }

    componentWillUnmount() {
		this.unsubscribe()
	}

    _handleLogin = (event) => {
		const provider = new firebase.auth.GoogleAuthProvider()

		provider.setCustomParameters({
			prompt: 'select_account',
		})

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				this.setUser(result.user)
			})
			.catch(error => {
				console.error('error', error)
			})
	}

    _handleLogout = (event) => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				this.setUser(null)
				navigate('/')
			})
			.catch(error => {
				console.error('Sign out error', error)
			})
    }
    
    setUser = user => {
		this.setState({
			user: user
				? { email: user.email, avatar: user.photoURL, name: user.displayName }
				: null,
		})
	}

    render() {
        let button;
        if(this.state.user) {
            button =
                <LogoutContainer user={this.state.user} _handleLogout={this._handleLogout} />;
        } else {
            button =
                <button className="btn btn-sm btn-outline-light font-weight-bold mx-3"
                        onClick={this._handleLogin}>
                    Sign Up / Login
                </button>;

        }
        return (
            <>
                {button}
            </>
        )
    }
}

export default Login;