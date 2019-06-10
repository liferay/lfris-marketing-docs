'use strict';

const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const path = require('path');

const createPages = (actions, edges, scope) => {
	const {createPage, createRedirect} = actions;

	edges.forEach(({node}, index) => {
		const {slug, redirect, mainPage} = node.fields;

		const templateKey = 'docs';

		if (redirect || mainPage) {
			const slugWithBar = slug.startsWith('/') ? slug : `/${slug}`;
			const fromPath = slugWithBar.endsWith('index.html') ? slugWithBar.replace('index.html', '') : slugWithBar;

			const toPath = mainPage ? slugWithBar : redirect;

			createRedirect({
				fromPath,
				isPermanent: true,
				redirectInBrowser: true,
				toPath: toPath,
			});
		}

		if (!redirect) {
			let previous = index === 0 ? false : edges[index - 1].node;
			let next = index === edges.length - 1 ? false : edges[index + 1].node;

			let slugPath = slug.replace('.html', '')
			createPage({
				path: slugPath,
				component: path.resolve(__dirname, `../src/templates/${templateKey}.js`),
				context: {
					slug,
					previous,
					next,
				},
			});
		}
	});
};

module.exports = async ({actions, graphql}) => {
	actions.createRedirect({
		fromPath: '/index.html',
		redirectInBrowser: true,
		toPath: '/',
	});

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
