import Login from '../Login'
import React from 'react'
import styles from './styles.module.scss'

import { isLoggedIn, getUser } from '../../services/auth';


class Auth extends React.Component {
    state = {
		user: null,
	}

	componentDidMount() {
		if(isLoggedIn()) {
			this.setUser(getUser());
		}
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	setUser = user => {
		this.setState({
			user: user
				? { email: user.email, avatar: user.avatar_url, name: user.full_name }
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
			<div className={styles.authContainer}>
				<div className={styles.authLoginContainer}>
					<h3 className={styles.authLoginWarning}>You must be a Liferay Employee to view this page</h3>
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