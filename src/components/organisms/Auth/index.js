import React from 'react'
import { useIdentityContext } from 'react-netlify-identity-widget'
import styles from './styles.module.scss'
import { Login } from 'components/molecules'

const Auth = ({ children, needsAuth }) => {
	const identity = useIdentityContext();

	return (
		<>
			{!needsAuth || (identity && identity.isLoggedIn && identity.user.email.includes('@liferay.com')) ? 
				children :
				<div className={`row ${styles.gateStyles}`}>
					<div className={`max-width-full margin-horizontal-auto ${styles.gateNotice}`}>
						Please sign in with a @liferay.com email address to view this content
						<Login className={styles.loginButton} />
					</div>
				</div>
			}
		</>
	);
}

export default Auth