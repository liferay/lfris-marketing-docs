import Login from '../Login'
import React from 'react';
import { useIdentityContext } from "react-netlify-identity-widget"
import styles from './styles.module.scss'

const Auth = ({ needsAuth, children }) => {
	const identity = useIdentityContext();
	const isLoggedIn = identity && identity.isLoggedIn;

	if (needsAuth && !isLoggedIn) {
		return (
			<div className={styles.authContainer}>
				<div className={styles.authLoginContainer}>
					<h3 className={styles.authLoginWarning}>You must be a Liferay Employee to view this page</h3>
					<Login />
				</div>
			</div>
		);
	} 
	return children;
}

export default Auth