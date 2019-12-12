import {Link} from 'gatsby';
import React from 'react';

import {Accordion} from 'components/molecules';
import styles from './styles.module.scss';

const SidebarContent = ({path, tree}) => {
	const navTree = tree.map((node, index) => {
		const className = `
			${escape(node.slug) === path ? styles.active : ''}
		`;

		if (node.children.length > 0) {
			return (
				<Accordion
					activeClassName={styles.activeTitle}
					className={className}
					key={index}
					open={path.includes(escape(node.folderName))}
					title={node.title}
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
					to={escape(node.slug)}
				>
					{node.title}
				</Link>
			</li>
		);
	});

	return navTree;
};

export default SidebarContent;
