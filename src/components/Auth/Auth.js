import Login from '../Login'
import React from 'react'
import { firebase } from '@firebase/app'

class Auth extends React.Component {
    state = {
		user: null,
	}

	componentDidMount() {
		this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setUser(user)
			}
		})
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	setUser = user => {
		this.setState({
			user: user
				? { email: user.email, avatar: user.photoURL, name: user.displayName }
				: null,
		})
    }

    renderPrivateContent() {
		const authenticatedUsers = ['liferay.com', 'triblio.com', 'kyrodigital.com']
		const currentUser = this.state.user

		const isUserAuthenticated =
			currentUser &&
			authenticatedUsers.some(user => {
				return currentUser.email.includes(user)
			})

            if (isUserAuthenticated || !this.props.needsAuth) {
                return this.props.children
            }

		return (
			<div className="auth-container">
				<div className="auth-login-container">
					<h3 className="auth-login-warning">You must be a Liferay Employee to view this page</h3>
					<Login />
				</div>
			</div>
		)
    }

    render() {
        return (
            <div>
                {this.renderPrivateContent()}
            </div>
        )
    }
}

export default Auth;