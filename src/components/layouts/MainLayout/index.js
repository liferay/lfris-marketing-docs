import Helmet from 'react-helmet';
import React from 'react';
import styles from './styles.module.scss';
import { Footer, LayoutNav, Sidebar } from 'components/organisms';
import { useStaticQuery, graphql } from 'gatsby';

const MainLayout = ({ className, children, location, pageContext }) => {
	const description = "Empowering Liferay Marketing";
	
	const data = useStaticQuery(
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
				<LayoutNav location={location} siteTitle={data.site.siteMetadata.title} search={true} />

				{pageContext.layout === 'article' ? 
					(<div className={`${styles.content} row`}>
						<Sidebar className='col-md-3' location={location} />
						<div className='col-md-9'>
							{children}
						</div>
					</div>)
					:
					(<div className={styles.content}>
						{children}
					</div>)
				}

				<Footer />
			</main>
		</div>
	);
}

export default MainLayout;