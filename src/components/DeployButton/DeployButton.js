import React from 'react'
import axios from 'axios'

class DeployButton extends React.Component {
	handleDeploy = event => {
		axios.post(`${process.env.GATSBY_DEPLOY_HOOK}`, {})
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
	}

    render() {
        return (
			<button onClick={this.handleDeploy()}>Click me</button>
        )
    }
}

export default DeployButton;