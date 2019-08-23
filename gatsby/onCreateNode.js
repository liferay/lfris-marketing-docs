module.exports = exports.onCreateNode = ({ node, actions, getNode}) => {
	const {createNodeField} = actions;

	if (node.internal.type === 'MarkdownRemark') {
		let {
			alwaysActive,
			path,
			title,
			order,
			date,
			description,
			author,
			mainPage,
			banner,
			stepNumber,
			short,
			needsAuth,
			updates,
			url
		} = node.frontmatter;

		const {relativePath} = getNode(node.parent);

		if (needsAuth === undefined) {
			needsAuth = true;
		}

		let slug = path;

		if (!slug) {
			slug = relativePath.replace('.md', '');
		}

		createNodeField({
			name: 'alwaysActive',
			node,
			value: alwaysActive || false,
		});

		createNodeField({
			name: 'title',
			node,
			value: title || 'none',
		});

		createNodeField({
			node,
			name: 'slug',
			value: slug,
		});

		createNodeField({
			node,
			name: 'title',
			value: title,
		});

		createNodeField({
			node,
			name: 'order',
			value: order,
		});

		createNodeField({
			node,
			name: 'author',
			value: author || '',
		});

		createNodeField({
			node,
			name: 'date',
			value: date || '',
		});

		createNodeField({
			node,
			name: 'description',
			value: description || '',
		});

		createNodeField({
			node,
			name: 'mainPage',
			value: mainPage || false,
		});

		createNodeField({
			node,
			name: 'banner',
			value: banner || '',
		});

		createNodeField({
			node,
			name: 'stepNumber',
			value: stepNumber || 0,
		});

		createNodeField({
			node,
			name: 'short',
			value: short || '',
		});

		createNodeField({
			node,
			name: 'needsAuth',
			value: needsAuth,
		});

		createNodeField({
			node,
			name: 'updates',
			value: updates || [],
		});

		createNodeField({
			node,
			name: 'url',
			value: url || [],
		});
	}
};
