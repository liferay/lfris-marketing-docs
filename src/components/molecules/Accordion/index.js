import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Icon } from 'components/atoms'
import { withPrefix } from 'gatsby' 

export default class Accordion extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showChildren: props.open,
		}
	}

	toggleVisibility = () => {
		this.setState({ showChildren: !this.state.showChildren })
	}

	render() {
		return (
			<li className={`${this.props.className} ${styles.accordion}`}>
				<div onClick={this.toggleVisibility}>
					<span>{this.props.title}</span>

					{this.state.showChildren ? (
						<Icon name="keyboardArrowRight" rotate={90} />
					) : (
						<Icon name="keyboardArrowRight" />
					)}
				</div>

				<ul className={`${styles.childrenContainer} ${this.state.showChildren ? styles.visible : styles.hidden}`}>
					{this.props.children}
				</ul>
			</li>
		)
	}
}