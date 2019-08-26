import Login from '../Login'
import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import styles from './styles.module.scss'
import { isBrowser, getUserAuthentication } from '../../services/auth';
import { navigate } from 'gatsby';

class Auth extends React.Component {
	constructor(props) {
        super(props);
	}

    render() {
		return (
			(this.props.needsAuth && !getUserAuthentication()) ? 
			(<div className={styles.authContainer}>
				<div className={styles.authLoginContainer}>
					<h3 className={styles.authLoginWarning}>You must be a Liferay Employee to view this page</h3>
					<Login />
				</div>
			</div>) :
			this.props.children
		);
    }
}

export default Auth;