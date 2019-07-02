import React, { Component } from 'react'
import { Avatar, Collapse } from 'react-md'

export default class LogoutContainer extends Component {
	state = { collapsed: true }

	componentWillMount() {
		this.setState({
			collapsed: true,
		})
	}

	toggle = () => {
		this.setState({ collapsed: !this.state.collapsed })
	}

	render() {
		const { collapsed } = this.state

		return (
			<div class="logout-container-wrapper">
				<Avatar className="logout-container-avatar" src={this.props.user.avatar} onClick={this.toggle} role="presentation" />
				<Collapse animate={false} collapsed={collapsed}>
					<div className="caret"></div>
					<div className="logout-container">
						<h4 className="logout-user-name">{this.props.user.name}</h4>
						<div className="logout-email-address">{this.props.user.email}</div>
						<h5 className="logout-button mx-3"
							onClick={this.props._handleLogout}>
							Logout
						</h5>
					</div>
				</Collapse>
			</div>
		);
	}
}