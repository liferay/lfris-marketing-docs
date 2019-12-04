import {Index} from 'elasticlunr';
import {StaticQuery, graphql} from 'gatsby';
import React, {Component} from 'react';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import styles from './styles.module.scss';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query:
				new URLSearchParams(this.props.location.search).get(
					'keywords'
				) || '',
			results: Index.load(this.props.searchIndex)
				.search(
					new URLSearchParams(this.props.location.search).get(
						'keywords'
					) || '',
					{expand: true}
				)
				.map(({ref}) =>
					Index.load(this.props.searchIndex).documentStore.getDoc(ref)
				)
		};

		this.handleInputBlur = this.handleInputBlur.bind(this);
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.removeQuery = this.removeQuery.bind(this);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleInputBlur, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleInputBlur, false);
	}

	getOrCreateIndex = () =>
		this.index
			? this.index
			: // Create an elastic lunr index and hydrate with graphql query results
			  Index.load(this.props.searchIndex);

	handleInputBlur(evt) {
		if (this.node.contains(evt.target)) {
			return;
		}

		this.removeQuery();
	}

	handleInputFocus(evt) {
		this.search(evt, this.state.query);
	}

	removeQuery() {
		if (!this.props.location.pathname.includes('/search')) {
			this.setState({
				results: ''
			});
		}
	}

	search = evt => {
		const query = evt.target.value;

		this.index = this.getOrCreateIndex();

		this.setState({
			query,
			results: this.index
				.search(query, {expand: true})
				.map(({ref}) => this.index.documentStore.getDoc(ref))
		});
	};

	render() {
		const {entryNumber, onPageSearch} = this.props;

		const searchClass = onPageSearch
			? styles['pageWrapper']
			: styles['sidebarWrapper'];

		return (
			<div
				className={searchClass + ' ' + styles.searchContainer}
				ref={node => (this.node = node)}
			>
				<SearchForm
					inputFocusEvent={this.handleInputFocus}
					onChangeEvent={evt => this.search(evt, this.state.query)}
					query={this.state.query}
				/>

				{this.state.results.length > 0 ? (
					<SearchResults
						entryNumber={entryNumber}
						onClick={this.removeQuery}
						results={this.state.results}
					/>
				) : (
					''
				)}
			</div>
		);
	}
}

export default props => (
	<StaticQuery
		query={graphql`
			query SearchIndex {
				siteSearchIndex {
					index
				}
			}
		`}
		render={data => {
			return (
				<Search {...props} searchIndex={data.siteSearchIndex.index} />
			);
		}}
	/>
);
