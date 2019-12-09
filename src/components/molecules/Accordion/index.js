import React, {Component} from 'react';
import {Link} from 'gatsby';

import {Icon} from 'components/atoms';
import styles from './styles.module.scss';

export default class Accordion extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showChildren: props.open
		};
	}

	toggleVisibility = () => {
		this.setState({showChildren: !this.state.showChildren});
	};

	render() {
		return (
			<li className={`${styles.accordion}`}>
				<div
					className={`${this.props.className} ${styles.accordionHeader}`}
					onClick={this.toggleVisibility}
				>
					<span
						className={`${
							this.state.showChildren
								? this.props.activeClassName
								: ''
						}`}
					>
						{this.props.title}
					</span>

					{this.state.showChildren ? (
						<Icon name='keyboardArrowRight' rotate={90} />
					) : (
						<Icon name='keyboardArrowRight' />
					)}
				</div>

				<ul
					className={`${styles.childrenContainer} ${
						this.state.showChildren ? styles.visible : styles.hidden
					}`}
				>
					{this.props.children}
				</ul>
			</li>
		);
	}
}
