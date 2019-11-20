const path = require('path');

module.exports = ({actions, stage}) => {
	let module = {};

	actions.setWebpackConfig({
		module,
		resolve: {
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
			alias: {
				$components: path.resolve(__dirname, '../src/components'),
			},
		},
	});
};
