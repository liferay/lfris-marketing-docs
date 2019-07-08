import React, { Component } from 'react'
import { Avatar, Collapse } from 'react-md'
import styles from './styles.module.scss'

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
			<div class={styles.logoutContainerWrapper}>
				<Avatar className={styles.logoutContainerAvatar} src={this.props.user.avatar} onClick={this.toggle} role="presentation" />
				<Collapse animate={false} collapsed={collapsed}>
					<div className="caret"></div>
					<div className={styles.logoutContainer}>
						<h4 className={styles.logoutUserName}>{this.props.user.name}</h4>
						<div className={styles.logoutEmailAddress}>{this.props.user.email}</div>
						<h5 className={`${styles.logoutButton} mx-3`}
							onClick={this.props._handleLogout}>
							Logout
						</h5>
					</div>
				</Collapse>
			</div>
		);
	}
}