import React from 'react'
import axios from 'axios'
import styles from './styles.module.scss'

class DeployButton extends React.Component {
	handleDeploy = event => {
		axios.post(`${process.env.GATSBY_DEPLOY_HOOK}`, {})
	}

    render() {
        return (
			<a className={styles.deployButton} onClick={this.handleDeploy()}>
				<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />
			</a>
        )
    }
}

export default DeployButton;