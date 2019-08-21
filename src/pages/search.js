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
		this.state = {
			isAuthenticated: getUserAuthentication()
		}
	}
    render() {
        return (
			<Auth needsAuth={false} isAuthenticated={this.state.isAuthenticated}>
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
										<Search searchIndex={data.siteSearchIndex.index} />
									)}
								}
							/>						
						</section>

						<section className={styles.footerContainer}>
							<Footer />
						</section>
					</main>
				</div>
			</Auth>
    )};
}

export default search;
