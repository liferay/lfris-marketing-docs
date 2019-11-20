import Helmet from 'react-helmet';
import React from 'react';
import styles from './styles.module.scss';
import { Footer, LayoutNav } from 'components/organisms';
import { Link, useStaticQuery, graphql } from 'gatsby';

const MainLayout = ({ className, children }) => {
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
			<main className="content">
				<header className="header">
					<LayoutNav siteTitle={data.site.siteMetadata.title} search={true} />
				</header>
				<section>
					{children}
				</section>
				<section>
					<Footer />
				</section>
			</main>
		</div>
	);
}

export default MainLayout;