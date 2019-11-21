import { StaticQuery, graphql, navigate } from 'gatsby';
import Navigation from './Navigation';
import Sidebarselect from './SidebarSelect';
import React from 'react';
import styles from './styles.module.scss';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			selectedValue: 0
		}

		this._getTree = this._getTree.bind(this);
		this._findFolder = this._findFolder.bind(this);
		this._getTreeChildren = this._getTreeChildren.bind(this);
		this._getTreeRootNames = this._getTreeRootNames.bind(this);
		this._handleSelected = this._handleSelected.bind(this);
	}

	_getTree = (data) => {
		let tree = [];
		let paths = data.map(({node}) => {
			const { fields: { slug } } = node;
	
			return slug.startsWith('/') ? slug.slice(1).split('/') : slug.split('/');
		});
	
		paths.forEach(path => {
			var currentLevel = tree;
			
			path.forEach((folder, index) => {	
				var existingPath = this._findFolder(currentLevel, 'name', folder);
		
				if (existingPath) {
					currentLevel = existingPath.children;
				} else {
					var newFolder = {
						children: [],
						isFolder: index < path.length - 1,
						link: '/' + path.join('/').replace(/.html|.md|.mdx/g, ''),
						name: folder.replace(/.html|.md|.mdx/g, '')
					};
		
					currentLevel.push(newFolder);
					currentLevel = newFolder.children;
				}
			});
		});
	
		return tree;
	};

	_getTreeChildren = (data) => {
		const treeChildren = [];

		data.forEach(treeItems => {
			treeChildren.push(treeItems.children)
		})

		return treeChildren;
	}

	_getTreeRootNames = (data) => {
		const treeRootNames = [];

		data.forEach(treeItems => {
			treeRootNames.push(treeItems.name);
		})

		return treeRootNames;
	}
	
	_findFolder(array, key, value) {
		var t = 0;
		while (t < array.length && array[t][key] !== value) { t++; };
	
		if (t < array.length) {
			return array[t]
		} else {
			return false;
		}
	}

	_handleSelected = (e, dataTree) => {
		navigate(dataTree[e.target.value].link);
		this.setState({
			selectedValue: e.target.value,
		});
	}

	render() {
		return (
			<StaticQuery
				query={graphql`
					query {
						allMarkdownRemark(filter: { fields: { slug: { regex: "//i" } } }) {
							edges {
								node {
									fields {
										slug
									}
									frontmatter {
										title
										description
									}
									excerpt
								}
							}
						}
					}
				`}
				render={data => {
					let navbarClasses = 'sidebar-toggler-content sidenav-fixed sidenav-menu-slider mt-5';
					if (this.props.navbarToggled) {
						navbarClasses += ' toggler-expanded';
					}

					const dataEdges = data.allMarkdownRemark.edges;
					const dataTree = this._getTree(dataEdges);
					const rootLevelNames = this._getTreeRootNames(dataTree);
					const dataTreeChildren = this._getTreeChildren(dataTree);



					return (
						<nav className={navbarClasses} id="clay-sidebar">
							<div className={`${styles.sideBarBody} sidebar-body mb-auto mt-5`}>
								<Sidebarselect selectItems={rootLevelNames} handleSelected={(e) => this._handleSelected(e,dataTree)} />

								<h2>{this.state.selectedValue}</h2>

								<Navigation sectionList={dataTreeChildren[this.state.selectedValue]} location={this.props.location} />
							</div>
						</nav>
					)}
				}
			/>
		);
	}
}


export default Sidebar;