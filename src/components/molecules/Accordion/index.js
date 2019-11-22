import React, { Component } from 'react'
import styles from './styles.module.scss'
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
			<li
			className={`${this.props.className} ${styles.accordion}`}
			onClick={this.toggleVisibility}
			>
				<div>
					<span>{this.props.title}</span>

					{this.state.showChildren ? (
						<svg>
							<use xlinkHref={withPrefix("images/icons/icons.svg#caret-bottom")} />
						</svg>
					) : (
						<svg >
							<use xlinkHref={withPrefix("images/icons/icons.svg#caret-bottom")} />
						</svg>
					)}
				</div>

				<ul>{this.props.children}</ul>
			</li>
		)
	}
}