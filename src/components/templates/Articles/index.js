import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import parse from 'html-react-parser';
import React from 'react';
import DOMpurify from 'dompurify';

import {Sidebar} from 'components/organisms';
import styles from './styles.module.scss';

const Docs = ({data, location}) => {
	const {
		markdownRemark: {html},
		googleDocImages: {edges: gDocImage}
	} = data;

	const options = {
		replace: domNode => {
			const {children} = domNode;

			if (!children) return;

			const hasImgTag = children.find(img => img.name === 'img');

			if (hasImgTag) {
				const {attribs} = hasImgTag;
				const {src, alt} = attribs;
				const gDocImageEdge = gDocImage.find(
					({node}) => node.id === src
				);

				if (!!gDocImageEdge) {
					const {
						node: {
							childImageSharp: {fluid}
						}
					} = gDocImageEdge;

					return (
						<Img
							fluid={fluid}
							alt={alt}
							className={`ui fluid image ${styles.image}`}
						/>
					);
				}
			}
		}
	};

	const htmlContent = parse(DOMpurify.sanitize(html), options);

	return (
		<div className='row w-100'>
			<Sidebar className='col-md-3' location={location} />
			<div className={`col-md-9 padding-top-1_5 ${styles.article}`}>
				<article>{htmlContent}></article>
			</div>
		</div>
	);
};

export default Docs;

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			html
			fields {
				needsAuth
			}
		}
		googleDocImages: allFile(
			filter: {name: {glob: "google-doc-image-**"}}
		) {
			edges {
				node {
					id
					name
					childImageSharp {
						fluid {
							base64
							tracedSVG
							aspectRatio
							src
							srcSet
							srcWebp
							srcSetWebp
							sizes
							originalImg
							originalName
							presentationWidth
							presentationHeight
						}
					}
				}
			}
		}
	}
`;
