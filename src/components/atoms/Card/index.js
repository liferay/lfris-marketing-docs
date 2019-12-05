import React from 'react';

import styles from './styles.module.scss';

const Card = ({title, color, direction, href, icon}) => (
	<a
		className={`${styles.card} ${styles[direction]} ${styles[color]}`}
		href={href}
	>
		<div className={styles.icon}>{icon}</div>
		<h5 className={styles.cardTitle}>{title}</h5>
	</a>
);

export default Card;
