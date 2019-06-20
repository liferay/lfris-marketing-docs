const clay = require('clay-css');
const path = require('path');

module.exports = {
	plugins: [
		{
			resolve: "gatsby-source-google-docs",
			options: {
				foldersIds: ["1pWpfx8vlWBZ143og1ULr5tA1uVOzQ4s7"], // folders Ids can be found in Google Drive URLs
				config: {
					api_key: "AIzaSyAiZIgZeWtVWXBhDQQw7uolIorjigqPleM",
					client_id: "218133277930-ifsoi0v646onlttbunub4bh7noge0c0c.apps.googleusercontent.com",
					client_secret: "cRJEohYQX7KcGJAgCH2VIV1m",
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
				plugins: []
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
		{
			resolve: 'gatsby-mdx',
			options: {
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: path.resolve(__dirname, './plugins/gatsby-remark-code-label-extractor'),
					},
					{
						resolve: 'gatsby-remark-prismjs',
						pluginOptions: {
							classPrefix: 'gatsby-code-',
						},
					},
					{
						resolve: path.resolve(__dirname, './plugins/gatsby-remark-use-clipboard'),
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: process.env.GA_TRACKING_ID,
			},
		},
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
		{
			resolve: 'gatsby-plugin-offline',
			options: {
				globPatterns: ['**/*.{js,jpg,png,gif,html,css,svg}'],
			},
		},
		'gatsby-plugin-zopfli'
	],
};
