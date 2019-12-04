import {Link} from 'gatsby';
import React from 'react';

import {Accordion} from 'components/molecules';
import styles from './styles.module.scss';

const SidebarContent = ({path, tree}) => {
	const navTree = tree.map((node, index) => {
		const className = `
			${escape(node.link) === path ? styles.active : ''}
		`;

		if (node.children.length > 0) {
			return (
				<Accordion
					activeClassName={styles.activeTitle}
					className={className}
					key={index}
					open={path.includes(escape(node.name))}
					title={node.name}
				>
					<SidebarContent path={path} tree={node.children} />
				</Accordion>
			);
		}

		return (
			<li key={index}>
				<Link
					activeClassName={styles.activeLink}
					className={styles.link}
					to={escape(node.link)}
				>
					{node.name}
				</Link>
			</li>
		);
	});

	return navTree;
};

export default SidebarContent;
