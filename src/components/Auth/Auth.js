import Login from '../Login'
import React from 'react';
import styles from './styles.module.scss'
import { getUserAuthentication } from '../../services/auth';

class Auth extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
            isLoggedIn: getUserAuthentication()
        }
	}

    render() {
		return (
			(this.props.needsAuth && !this.state.isLoggedIn) ? 
				(<div className={styles.authContainer}>
					<div className={styles.authLoginContainer}>
						<h3 className={styles.authLoginWarning}>You must be a Liferay Employee to view this page</h3>
						<Login />
					</div>
				</div>)
				:
				this.props.children
		);
    }
}

export default Auth;