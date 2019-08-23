import Auth from '../components/Auth';
import Footer from '../components/Footer';
import LayoutNav from '../components/LayoutNav';
import React from 'react';
import Search from '../components/Search'
import styles from './styles.module.scss';
import { StaticQuery } from 'gatsby';
import { getUserAuthentication } from '../services/auth';

class search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuthenticated: getUserAuthentication()
		}
	}

    render() {
        return (
				<div className="search-page">
					<main className="content">
						<header className="header">
							<LayoutNav effect={true} static={true} sidebarHamburguerIcon={true} />
						</header>

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
										<Search location={this.props.location} childClass="searchPage"  searchIndex={data.siteSearchIndex.index} />
									)}
								}
							/>						
						</section>

						<section className={styles.footerContainer}>
							<Footer />
						</section>
					</main>
				</div>
    )};
}

export default search;
