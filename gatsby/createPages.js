'use strict';

//const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const path = require('path');

const createPages = (actions, edges, scope) => {
	const {createPage} = actions;
	const layout = 'article';

	edges.forEach(({node}, index) => {
		const {slug} = node.fields;

		let previous = index === 0 ? false : edges[index - 1].node;
		let next = index === edges.length - 1 ? false : edges[index + 1].node;

		let slugPath = slug.replace('.html', '')
		createPage({
			path: slugPath,
			component: path.resolve(__dirname, `../src/components/templates/Articles/index.js`),
			context: {
				slug,
				previous,
				next,
				layout
			},
		});
	});
};

module.exports = async ({actions, graphql}) => {
	return graphql(
		`
			query {
				allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
					edges {
						node {
							fields {
								slug
							}
						}
					}
				}
			}
		`
	).then(({data, errors}) => {
		if (errors) {
			return Promise.reject(errors);
		}

		const {edges} = data.allMarkdownRemark;

		createPages(actions, edges);
	});
};