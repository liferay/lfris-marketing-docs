import {StaticQuery, graphql, navigate} from 'gatsby';
import React from 'react';
import startCase from 'lodash.startcase';

import SidebarContent from './SidebarContent';
import SidebarSelect from './SidebarSelect';
import styles from './styles.module.scss';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedValue: props.location.pathname.split('/')[1]
		};

		this._getTree = this._getTree.bind(this);
		this._getTreeChildren = this._getTreeChildren.bind(this);
		this._getTreeRootNames = this._getTreeRootNames.bind(this);
		this._handleSelected = this._handleSelected.bind(this);
	}

	_getTree = data => {
		let tree = [];

		data.forEach(({node}) => {
			var currentLevel = tree;

			const {
				fields: {slug, title}
			} = node;

			const folderNames = slug.startsWith('/')
				? slug.slice(1).split('/')
				: slug.split('/');

			folderNames.forEach((folderName, index) => {
				const existingPath = currentLevel.find(
					root => root.folderName === folderName
				);

				const isFolder = index < slug.length - 1;

				if (existingPath) {
					currentLevel = existingPath.children;
				} else {
					var newFolder = {
						children: [],
						slug: slug,
						folderName: folderName,
						title: isFolder ? startCase(folderName) : title
					};

					currentLevel.push(newFolder);
					currentLevel = newFolder.children;
				}
			});
		});

		return tree;
	};

	_getTreeChildren = (data, selectedValue) => {
		const {children} = data.find(obj => {
			return obj.folderName === selectedValue;
		});

		return children;
	};

	_getTreeRootNames = data => {
		const treeRootNames = data.map(treeRootNames => ({
			folderName: treeRootNames.folderName,
			title: treeRootNames.title
		}));

		return treeRootNames;
	};

	_handleSelected = (e, dataTree) => {
		const {slug} = dataTree.find(obj => {
			return obj.folderName === e.target.value;
		});

		this.setState({
			selectedValue: e.target.value
		});

		navigate(slug);
	};

	render() {
		return (
			<StaticQuery
				query={graphql`
					query {
						allMarkdownRemark(
							filter: {fields: {slug: {regex: "//i"}}}
						) {
							edges {
								node {
									fields {
										slug
										title
									}
									excerpt
								}
							}
						}
					}
				`}
				render={data => {
					const {
						className,
						location: {pathname}
					} = this.props;
					const {selectedValue} = this.state;
					const {
						allMarkdownRemark: {edges}
					} = data;

					const dataTree = this._getTree(edges);
					const rootLevelNames = this._getTreeRootNames(dataTree);
					const selectedChildren = this._getTreeChildren(
						dataTree,
						selectedValue
					);

					return (
						<div
							className={`${styles.sidebarContainer} ${className}`}
						>
							<nav className={styles.sideNav}>
								<SidebarSelect
									selectItems={rootLevelNames}
									handleSelected={e =>
										this._handleSelected(e, dataTree)
									}
									defaultValue={selectedValue}
								/>

								<ul className={styles.sidebarContentWrapper}>
									<SidebarContent
										path={pathname}
										tree={selectedChildren}
									/>
								</ul>
							</nav>
						</div>
					);
				}}
			/>
		);
	}
}

export default Sidebar;
