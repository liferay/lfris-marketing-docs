const clay = require('clay-css');
const fs = require('fs');
const path = require('path');
const remark = require('remark');
const stripMarkdown = require('strip-markdown');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

const folderId = JSON.parse(process.env.GATSBY_FOLDER_ID);

module.exports = {
	siteMetadata: {
		title: 'Marketing Documentation',
		author: 'IS Marketing',
		description: 'All your marketing documentation needs in one place'
	},
	plugins: [
		{
			resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
			options: {
				fields: [
					`description`,
					`excerpt`,
					`path`,
					`tags`,
					`title`,
					`markdown`
				],
				resolvers: {
					MarkdownRemark: {
						description: node => node.frontmatter.description,
						excerpt: node => {
							const text = remark()
								.use(stripMarkdown)
								.processSync(node.rawMarkdownBody);
							const excerptLength = 140;
							return (
								String(text).substring(0, excerptLength) + '...'
							);
						},
						path: node => node.fields.slug,
						tags: node => node.frontmatter.tags,
						title: node => node.frontmatter.title,
						markdown: node => node.rawMarkdownBody
					}
				},
				filter: (node, getNode) => node.frontmatter.tags !== 'exempt'
			}
		},
		{
			resolve: 'gatsby-plugin-layout',
			options: {
				component: require.resolve(
					'./src/components/layouts/MainLayout/index.js'
				)
			}
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-remove-trailing-slashes',
		'gatsby-plugin-resolve-src',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				precision: 8,
				includePaths: clay.includePaths.concat(
					path.join(clay.includePaths[0], 'node_modules')
				)
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-plugin-zopfli',
		// {
		// 	resolve: 'gatsby-source-filesystem',
		// 	options: {
		// 		name: 'packages',
		// 		path: `${__dirname}/content`
		// 	}
		// },
		{
			resolve: 'gatsby-source-google-docs',
			options: {
				foldersIds: folderId, // folders Ids can be found in Google Drive URLs
				config: {
					api_key: process.env.GATSBY_API_KEY,
					client_id: process.env.GATSBY_CLIENT_ID,
					client_secret: process.env.GATSBY_CLIENT_SECRET,
					token_env_variable: 'GATSBY_GDOCS_TOKEN'
				},
				fields: ['createdTime'],
				fieldsMapper: {createdTime: 'date', name: 'title'},
				fieldsDefault: {draft: false},
				convertImgToNode: true
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				footnotes: false,
				plugins: [
					{
						resolve: `gatsby-remark-default-html-attrs`,
						options: {
							h1: {
								className: 'font-size-heading-f1'
							},
							h2: {
								className: 'font-size-heading-f2'
							},
							h3: {
								className: 'font-size-heading-f3'
							},
							h4: {
								className: 'font-size-heading-f4'
							},
							h5: {
								className: 'font-size-heading-f5'
							},
							p: {
								className: 'font-size-paragraph-base'
							},
							table: {
								className:
									'table table-autofit table-hover table-bordered table-valign-top'
							}
						}
					}
				]
			}
		},
		'gatsby-transformer-sharp'
	]
};
