import React from 'react';
import {Link as ScrollLink} from 'react-scroll';

import styles from './styles.module.scss';

const OnPageNav = ({linkArray, location}) => {
	const {hash} = location;
	console.log(hash);

	return (
		<ul className={styles.onPageNav}>
			{linkArray.map(item => {
				return (
					<li className={styles.onPageNavItem}>
						<ScrollLink
							activeClass={styles.currentLink}
							className={`${styles.onPageNavItemAnchor}`}
							hashSpy={true}
							offset={-64}
							smooth={true}
							spy={true}
							to={item.id}
						>
							{item.name}
						</ScrollLink>
					</li>
				);
			})}
		</ul>
	);
};

export default OnPageNav;
