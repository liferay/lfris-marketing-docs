import React from 'react'
import axios from 'axios'

class DeployButton extends React.Component {
	handleDeploy = event => {
		axios.post(`${process.env.GATSBY_DEPLOY_HOOK}`, {})
	}

    render() {
        return (
			<button onClick={this.handleDeploy()}>Click me</button>
        )
    }
}

export default DeployButton;