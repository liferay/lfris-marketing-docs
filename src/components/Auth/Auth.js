import Login from '../Login'
import React from 'react';
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import styles from './styles.module.scss'
import { isBrowser, getUserAuthentication } from '../../services/auth';
import { navigate } from 'gatsby';

class Auth extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        }
	}

	componentDidMount() {
		const identity = useIdentityContext()
		const isLoggedIn = identity && identity.isLoggedIn;
		
		this.setState({
			isAuthenticated: isLoggedIn
		})
	}

    render() {
        if (this.props.needsAuth && !this.state.isAuthenticated) {
            return (
				<div className={styles.authContainer}>
					<div className={styles.authLoginContainer}>
						<h3 className={styles.authLoginWarning}>You must be a Liferay Employee to view this page</h3>
						<Login />
					</div>
				</div>
			);
        }

        return this.props.children;
    }
}

export default Auth;