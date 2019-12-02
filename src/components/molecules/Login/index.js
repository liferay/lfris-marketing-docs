import React from 'react';
import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget'

const Login = () => {
    const [dialog, setDialog] = React.useState(false);
    const identity = useIdentityContext();

    return(
        <div>
            <button className="btn" style={{ maxWidth: 400, background: 'darkgreen' }} onClick={() => setDialog(true)}>
                {
                    identity && identity.isLoggedIn ? 'LOG OUT' : 'LOG IN'
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
