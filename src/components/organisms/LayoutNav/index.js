import {Link, withPrefix} from 'gatsby';
import React from 'react';

import {Login, Search} from 'components/molecules';
import styles from './styles.module.scss';

const LayoutNav = ({siteTitle, location}) => {
	return (
		<nav className={styles.nav}>
			<Link to='/' className={styles.titleContainer}>
				<img
					className={styles.logo}
					src={withPrefix('/images/home/liferay_logo.svg')}
					alt='Liferay Logo'
				/>

				<h1 className={styles.navTitle}>{siteTitle}</h1>
			</Link>

			<div className={styles.itemContainer}>
				{location.pathname === '/' ||
				location.pathname === '/search' ? (
					''
				) : (
					<Search
						entryNumber={5}
						location={location}
						onPageSearch={false}
					/>
				)}
				<Login />
			</div>
		</nav>
	);
};

export default LayoutNav;
