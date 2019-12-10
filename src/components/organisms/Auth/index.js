import {useIdentityContext} from 'react-netlify-identity-widget';
import React from 'react';

import {Login} from 'components/molecules';
import styles from './styles.module.scss';

const Auth = ({children, needsAuth}) => {
	const identity = useIdentityContext();
	const identityNullCheck =
		process.env.NODE_ENV === 'development'
			? true
			: identity &&
			  identity.isLoggedIn &&
			  identity.user.email.includes('@liferay.com');

	if (!needsAuth || identityNullCheck) {
		return children;
	}

	return (
		<section className={`${styles.gateStyles}`}>
			<div
				className={`max-width-full margin-horizontal-auto ${styles.gateNotice}`}
			>
				Please sign in with a @liferay.com email address to view this
				content
				<Login className={styles.loginButton} />
			</div>
		</section>
	);
};

export default Auth;
