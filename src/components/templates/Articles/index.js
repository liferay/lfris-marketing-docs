import camelCase from 'camelcase';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import parse from 'html-react-parser';
import React from 'react';
import sanitizeHTML from 'sanitize-html';
import {Element as ScrollElement} from 'react-scroll';

import {OnPageNav} from 'components/molecules';
import {Sidebar} from 'components/organisms';
import styles from './styles.module.scss';

const Docs = ({data, location}) => {
	const {
		markdownRemark: {html},
		googleDocImages: {edges: gDocImage}
	} = data;

	const h2Array = [];

	const options = {
		replace: domNode => {
			const {children, name} = domNode;

			if (!children) return;

			//h2 replacement
			if (name === 'h2') {
				const hasText = children.find(h2 => h2.type === 'text');

				if (hasText) {
					const {data: text} = hasText;

					const headerId = camelCase(text);

					h2Array.push({
						id: headerId,
						name: text
					});

					return (
						<ScrollElement id={headerId}>
							<h2
								className='documentation-h2'
								style={{
									marginBottom: '-128px',
									marginTop: '-32px',
									paddingBottom: '128px',
									paddingTop: '32px'
								}}
							>
								{text}
							</h2>
						</ScrollElement>
					);
				}
			}

			//img replacement
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

	const htmlContent = parse(
		sanitizeHTML(html, {allowedTags: false, allowedAttributes: false}),
		options
	);

	return (
		<div className='row w-100'>
			<Sidebar className='col-md-3' location={location} />
			<div className={`col-md-7 padding-top-1_5 ${styles.article}`}>
				<article>{htmlContent}</article>
			</div>
			<div className='col-md-2 padding-top-1_5'>
				<OnPageNav linkArray={h2Array} />
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
