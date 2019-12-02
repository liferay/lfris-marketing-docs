import React from 'react'
import { useIdentityContext } from 'react-netlify-identity-widget'
import styles from './styles.module.scss'

const Auth = ({ children, needsAuth }) => {
	const identity = useIdentityContext();

	return (
		<>
			{!needsAuth || (identity && identity.isLoggedIn) ? 
				children :
				`Please sign in with a @liferay.com email address`
			}
			{
				console.log(needsAuth)
			}
		</>
	);
}

export default Auth