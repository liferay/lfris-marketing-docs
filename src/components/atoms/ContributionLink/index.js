import React from 'react';

import styles from './styles.module.scss';

const ContributionLink = ({children}) => (
	<div className={styles.contributionLink}>{children}</div>
);

export default ContributionLink;
