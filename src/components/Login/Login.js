import React from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import netlifyIdentity from 'netlify-identity-widget'
import './styles.module.scss'

const Login = () => {
  const identity = useIdentityContext()
  const [loggedIn, setLoggedIn] = React.useState(0);

  console.log(JSON.stringify(identity))

  netlifyIdentity.on('login', setLoggedIn(identity && identity.isLoggedIn));
  netlifyIdentity.on('logout', setLoggedIn(identity && identity.isLoggedIn));

  return (
    <>
        <button className="btn btn-sm btn-outline-light font-weight-bold mx-3" onClick={() => {
          netlifyIdentity.open();
        }}>
          {loggedIn ? `LOG OUT` : "LOG IN"}
        </button>
    </>
  )
}

export default Login