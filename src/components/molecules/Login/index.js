import React from 'react';
import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget'
import styles from './styles.module.scss'

const Login = () => {
    const [dialog, setDialog] = React.useState(false);
    const identity = useIdentityContext();

    return(
        <div>
            <button className={`${styles.loginButton}`} onClick={() => setDialog(true)}>
                {
                    identity && identity.isLoggedIn ?
                        <img alt="avatar" className={styles.avatar} src={identity.user.user_metadata.avatar_url} />
                        :
                        'Sign In'
                }
            </button>

            <IdentityModal
                showDialog={dialog}
                onCloseDialog={() => setDialog(false)}
            />
        </div>
    )
}

export default Login;
