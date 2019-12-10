import axios from 'axios';
import React from 'react';

class DeployButton extends React.Component {
	handleDeploy = event => {
		axios.post(this.props.deployHook, {});
	};

	render() {
		return (
			<button
				className={'btn btn-primary btn-sm margin-horizontal-0_5'}
				onClick={this.handleDeploy}
				type='button'
			>
				{this.props.children}
			</button>
		);
	}
}

export default DeployButton;
