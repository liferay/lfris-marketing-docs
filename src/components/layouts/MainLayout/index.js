import 'react-netlify-identity-widget/styles.css';
import {graphql, useStaticQuery} from 'gatsby';
import {IdentityContextProvider} from 'react-netlify-identity-widget';
import Helmet from 'react-helmet';
import React from 'react';

import {Auth, Footer, LayoutNav} from 'components/organisms';
import styles from './styles.module.scss';

const MainLayout = ({className, children, location, pageContext, data}) => {
	const url = 'https://mktg-docs.liferay.com/';
	const description = 'Empowering Liferay Marketing';

	const {
		site: {
			siteMetadata: {title}
		}
	} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);

	const needsAuth =
		pageContext.layout === 'article'
			? data.markdownRemark.fields.needsAuth
			: location.pathname === '/' || location.pathname.includes('/search')
			? false
			: true;

	return (
		<div className={className}>
			<Helmet>
				<title>{process.env.PROJECT_NAME}</title>
				<meta name='description' content={description} />
				<meta name='og:description' content={description} />
				<meta name='twitter:description' content={description} />
				<meta name='og:title' content={process.env.PROJECT_NAME} />
			</Helmet>
			<main
				className={`${styles.contentWrapper} ${
					pageContext.layout ? styles.article : ''
				}`}
			>
				<IdentityContextProvider url={url}>
					<LayoutNav
						location={location}
						siteTitle={title}
						search={true}
					/>

					<div className={`${styles.content}`}>
						<Auth needsAuth={needsAuth}>{children}</Auth>
					</div>

					<Footer />
				</IdentityContextProvider>
			</main>
		</div>
	);
};

export default MainLayout;
