import React from 'react';
import LayoutNav from '../components/LayoutNav';
import Footer from '../components/Footer';
import Auth from '../components/Auth';
import styles from './styles.module.scss';
import { getUserAuthentication } from '../services/auth';
import { StaticQuery } from 'gatsby';
import Search from '../components/Search'

class search extends React.Component {
	constructor(props) {
		super(props)
	}
    render() {
        return (
		<section className={`container-fluid container-fluid-max-lg ${styles.container}`}>
			<StaticQuery
				query={graphql`
					query SearchIndexQueryPage {
						siteSearchIndex {
							index
						}
					}
				`}
				render={data => {
					return (
						<Search location={this.props.location} searchIndex={data.siteSearchIndex.index} />
					)}
				}
			/>						
		</section>
    )};
}

export default search;
