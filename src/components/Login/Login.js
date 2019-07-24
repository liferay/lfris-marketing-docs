import React from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import netlifyIdentity from 'netlify-identity-widget'
import './styles.module.scss'

const Login = () => {
  const identity = useIdentityContext()

  console.log(JSON.stringify(identity))
  const isLoggedIn = () => {
    return  identity && identity.isLoggedIn;
  }

  netlifyIdentity.on('login', isLoggedIn());
  netlifyIdentity.on('logout', isLoggedIn());

  return (
    <>
        <button className="btn btn-sm btn-outline-light font-weight-bold mx-3" onClick={() => {
          netlifyIdentity.open();
        }}>
          {isLoggedIn ? `LOG OUT` : "LOG IN"}
        </button>
    </>
  )
}

export default Login