import {navigate} from '@reach/router';
import {withPrefix} from 'gatsby';
import React from 'react';

import {Icon} from 'components/atoms';
import styles from './styles.module.scss';

const SearchForm = ({query, onChangeEvent, inputFocusEvent}) => (
	<form
		className={styles.searchForm}
		onSubmit={evt =>
			navigate(`/search?keywords=${encodeURIComponent(query)}`)
		}
		role='search'
		method='GET'
	>
		<input
			aria-controls='search-results-count'
			autoComplete='off'
			className={styles.searchInput}
			id='search-input'
			name='keywords'
			onChange={onChangeEvent}
			onFocus={inputFocusEvent}
			placeholder='Search Docs'
			type='search'
			value={query}
		/>
		<button className={styles.searchButton} type='submit'>
			<Icon name='search' className={styles.lexiconIcon} />
		</button>
	</form>
);

export default SearchForm;
