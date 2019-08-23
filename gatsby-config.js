const clay = require('clay-css');
const path = require('path');
const fs = require('fs');

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

const folderId = JSON.parse(process.env.GATSBY_FOLDER_ID);

module.exports = {
	plugins: [
		{
			resolve: "gatsby-source-google-docs",
			options: {
				foldersIds: folderId, // folders Ids can be found in Google Drive URLs
				config: {
					api_key: process.env.GATSBY_API_KEY,
					client_id: process.env.GATSBY_CLIENT_ID,
					client_secret: process.env.GATSBY_CLIENT_SECRET,
					token_env_variable: "GATSBY_GDOCS_TOKEN"
				},
				fields: ["createdTime"],
				fieldsMapper: {createdTime: "date", name: "title"},
				fieldsDefault: {draft: false},
			},
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				footnotes: false,
				plugins: [
					{
						resolve:`gatsby-remark-default-html-attrs`,
						options: {
							"h1": {
								className: "documentation-h1",
							},
							"h2": {
								className: "documentation-h2",
							},
							"h3": {
								className: "documentation-h3",
							},
							"h4": {
								className: "documentation-h4",
							},
							"h5": {
								className: "documentation-h5",
							},
							"p": {
								className: "documentation-p",
							}
						}
					  }
				]
			},
		},
		'gatsby-plugin-meta-redirect',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				precision: 8,
				includePaths: clay
					.includePaths
					.concat(
						path.join(
							clay.includePaths[0],
							'node_modules'
						)
					),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'packages',
				path: `${__dirname}/content`,
			},
		},
		// {
		// 	resolve: 'gatsby-mdx',
		// 	options: {
		// 		extensions: ['.mdx', '.md'],
		// 		gatsbyRemarkPlugins: [
		// 			{
		// 				resolve: path.resolve(__dirname, './plugins/gatsby-remark-code-label-extractor'),
		// 			},
		// 			{
		// 				resolve: 'gatsby-remark-prismjs',
		// 				pluginOptions: {
		// 					classPrefix: 'gatsby-code-',
		// 				},
		// 			},
		// 			{
		// 				resolve: path.resolve(__dirname, './plugins/gatsby-remark-use-clipboard'),
		// 			},
		// 		],
		// 	},
		// },
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: process.env.GA_TRACKING_ID,
			},
		},
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Gatsby Boilerplate',
				short_name: 'Gatsby Boilerplate',
				start_url: '/',
				background_color: '#FFFFFF',
				theme_color: '#0B5FFF',
				display: 'minimal-ui',
				icons: [
					{
						"src": "favicons/android-chrome-192x192.png",
						"sizes": "192x192",
						"type": "image/png"
					},
					{
						"src": "favicons/android-chrome-512x512.png",
						"sizes": "512x512",
						"type": "image/png"
					}
				]
			},
		},
		'gatsby-plugin-zopfli'
	],
};
