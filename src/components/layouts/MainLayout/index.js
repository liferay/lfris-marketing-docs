import Helmet from 'react-helmet';
import React from 'react';
import styles from './styles.module.scss';
import { Auth } from 'components/molecules';
import { Footer, LayoutNav, Sidebar } from 'components/organisms';
import { graphql, useStaticQuery } from 'gatsby';

const MainLayout = ({ className, children, location, pageContext, data }) => {
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
				<Auth needsAuth={needsAuth}>
					<LayoutNav location={location} siteTitle={title} search={true} />

					{pageContext.layout === 'article' ? 
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
					}

					<Footer />
				</Auth>
			</main>
		</div>
	);
}

export default MainLayout;