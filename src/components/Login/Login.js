import React, { Component } from "react"
import netlifyIdentity from 'netlify-identity-widget'
import './styles.module.scss'

export default class Login extends Component {
  state = { loggedIn: false }

  componentDidMount() {
    const isLoggedIn = !!netlifyIdentity.currentUser();

    const loggedInFunction = () => {
      console.log('is logged in:' + isLoggedIn);
      this.setState({ loggedIn: isLoggedIn });
    }

    netlifyIdentity.on('login', console.log(isLoggedIn));
    netlifyIdentity.on('logout', console.log(isLoggedIn));
  }

  render() {
    return (
      <>
          <button className="btn btn-sm btn-outline-light font-weight-bold mx-3" onClick={() => {
            netlifyIdentity.open();
          }}>
            {this.state.loggedIn ? `LOG OUT` : `LOG IN`}
          </button>
      </>)
  }
}