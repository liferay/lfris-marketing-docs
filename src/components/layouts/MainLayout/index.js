import Helmet from 'react-helmet';
import { useIdentityContext, IdentityContextProvider } from 'react-netlify-identity-widget'
import React from 'react';
import styles from './styles.module.scss';
import { Footer, LayoutNav, Sidebar } from 'components/organisms';
import { graphql, useStaticQuery } from 'gatsby';
import 'react-netlify-identity-widget/styles.css'

const MainLayout = ({ className, children, location, pageContext, data }) => {
	const url = 'https://dreamy-hugle-ec0273.netlify.com/';
	const description = "Empowering Liferay Marketing";

	const {site: {siteMetadata: {title}}} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)

	const needsAuth = (pageContext.layout === 'article' ? data.markdownRemark.fields.needsAuth : (location.pathname === '/' ? false : true));

	return (
		<div className={className}>
			<Helmet>
				<title>{process.env.PROJECT_NAME}</title>
				<meta name="description" content={description} />
				<meta name="og:description" content={description} />
				<meta name="twitter:description" content={description} />
				<meta name="og:title" content={process.env.PROJECT_NAME} />
			</Helmet>
			<main className={`${styles.contentWrapper} ${pageContext.layout ? styles.article : ''}`}>
				<IdentityContextProvider url={url}>
					<AuthView needsAuth={needsAuth} location={location} children={children} title={title} pageContext={pageContext} />
				</IdentityContextProvider>
			</main>
		</div>
	);
}

export default MainLayout;

function AuthView({location, children, title, pageContext, needsAuth }) {
	const identity = useIdentityContext();

	return (
		<div>
			<LayoutNav location={location} siteTitle={title} search={true} />

			{ !needsAuth || (identity && identity.isLoggedIn) ?
				(pageContext.layout === 'article' ? 
					(
						<div className={`${styles.content} row w-100`}>
							<Sidebar className='col-md-3' location={location} />
							<div className='col-md-9'>
								{children}
							</div>
						</div>
					)
					:
					(<div className={styles.content}>
						{children}
					</div>)
				) : (
					<div className={styles.content}>
						You need to be logged in {needsAuth}
						{console.log(needsAuth)}
					</div>
				)
			}

			<Footer />
		</div>
	)
}