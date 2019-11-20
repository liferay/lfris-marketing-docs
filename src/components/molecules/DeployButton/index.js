import React from 'react'
import axios from 'axios'
import styles from './styles.module.scss'

class DeployButton extends React.Component {
	handleDeploy = event => {
		axios.post(this.props.deployHook, {})
	}

    render() {
        return (
			<button className={styles.deployButton} onClick={this.handleDeploy}>
				{this.props.children}
			</button>
        )
    }
}

export default DeployButton;