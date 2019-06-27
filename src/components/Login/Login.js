import 'firebase/auth'
import React from 'react'
import { firebase } from '@firebase/app'
import { navigate } from 'gatsby'

const firebaseConfig = {
    apiKey: "AIzaSyBUTSq9EUbIzNBZVzvtbIPQ8eaeWo3ccDI",
    authDomain: "firm-retina-244218.firebaseapp.com",
    databaseURL: "https://firm-retina-244218.firebaseio.com",
    projectId: "firm-retina-244218",
    storageBucket: "",
    messagingSenderId: "241311197232",
    appId: "1:241311197232:web:f0dd9b4c21bbe641"
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
                <button className="btn btn-sm btn-outline-light font-weight-bold mx-3"
                        onClick={this._handleLogout}>
                    Logout
                </button>;
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