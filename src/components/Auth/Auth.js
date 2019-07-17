import React from 'react';
import { isBrowser, getUserAuthentication } from '../../services/auth';
import styles from './styles.module.scss'
import { navigate } from 'gatsby';
import Login from '../Login'
import netlifyIdentity from 'netlify-identity-widget';

class Auth extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: getUserAuthentication()
        }
	}

	componentDidUpdate() {
		netlifyIdentity.on('close', () => {
			this.setState({isAuthenticated: getUserAuthentication()});
		});

		if(!this.state.isAuthenticated) {
			if(isBrowser()) {
				navigate(window.location.pathname);
			}
		}
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