import {Link} from 'gatsby';
import React from 'react';

import styles from './styles.module.scss';

const SearchResults = ({results, entryNumber, onClick}) => {
	const resultsArray = results.slice(0, entryNumber);

	return resultsArray.length > 0 ? (
		<ul className={styles.searchResultsContainer} onClick={onClick}>
			{resultsArray.map(page => (
				<li className={styles.searchResultsItem} key={page.id}>
					<Link
						className={styles.searchResultsLinkContainer}
						to={`${page.path}`}
					>
						<h4 className={styles.resultsTitle}>{page.title}</h4>

						<div
							className={`font-size-paragraph-base ${styles.resultsDescription}`}
						>
							{page.description ? page.description : page.excerpt}
						</div>

						<div
							className={`color-neutral-3 font-size-paragraph-small ${styles.resultsPath}`}
						>
							{page.path ? page.path.replace(/\//gi, ' > ') : ''}
						</div>
					</Link>
				</li>
			))}
		</ul>
	) : (
		''
	);
};

export default SearchResults;
