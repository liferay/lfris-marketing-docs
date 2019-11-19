import React from 'react';
import styles from './styles.module.scss';
import { Auth, Search } from 'components/molecules'
import { Footer, LayoutNav } from 'components/organisms';
import { StaticQuery } from 'gatsby';
import { getUserAuthentication } from 'services/auth';

class search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuthenticated: getUserAuthentication()
		}
	}

    render() {
		let needsAuth = true;

		if (process.env.NODE_ENV === 'development') {
			needsAuth = false;
		}

        return (
			<div className="search-page">
				<Auth needsAuth={needsAuth}>
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
				</Auth>
			</div>
    )};
}

export default search;
