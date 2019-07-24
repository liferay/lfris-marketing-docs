import React from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import netlifyIdentity from 'netlify-identity-widget'
import './styles.module.scss'

const Login = () => {
  const identity = useIdentityContext()
  const [loggedIn, setLoggedIn] = React.useState(0);

  console.log(JSON.stringify(identity));

  
  return (
    <>
        <button className="btn btn-sm btn-outline-light font-weight-bold mx-3" onClick={() => {
          netlifyIdentity.open();
          netlifyIdentity.on('login', setLoggedIn(true));
          netlifyIdentity.on('logout', setLoggedIn(false));
        }}>
          {loggedIn ? `LOG OUT` : "LOG IN"}
        </button>
    </>
  )
}

export default Login