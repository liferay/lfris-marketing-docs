import React from 'react'
import axios from 'axios'
import styles from './styles.module.scss'

class DeployButton extends React.Component {
	handleDeploy = event => {
		axios.post(this.props.deployHook, {})
		console.log(this.props.deployHook);
	}

    render() {
        return (
			<button className={`btn btn-sm btn-primary btn-outline-light font-weight-bold mx-3 ${styles.deployButton}`} onClick={this.handleDeploy}>
				{this.props.children}
			</button>
        )
    }
}

export default DeployButton;