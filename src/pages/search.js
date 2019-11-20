import React from 'react';
import styles from './styles.module.scss';
import { Auth, Search } from 'components/molecules'
import { Footer, LayoutNav } from 'components/organisms';
import { StaticQuery } from 'gatsby';
import { getUserAuthentication } from 'services/auth';
import { MainLayout } from 'components/layouts'

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
			<MainLayout className="search-page">
				<Auth needsAuth={needsAuth}>
					<section className={`${styles.container}`}>
						<Search location={this.props.location} childClass="searchPage" />	
					</section>
				</Auth>
			</MainLayout>
    )};
}

export default search;
