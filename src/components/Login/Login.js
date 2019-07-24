import React, { Component } from "react"
import { useIdentityContext } from "react-netlify-identity-widget"
import netlifyIdentity from 'netlify-identity-widget'
import './styles.module.scss'

export default class Login extends Component {
  state = { loggedIn: false }

  componentDidMount() {
    netlifyIdentity.on('login', this.setState({ loggedIn: true }));
    netlifyIdentity.on('logout', this.setState({ loggedIn: false }));
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