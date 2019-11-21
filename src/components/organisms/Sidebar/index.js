import { StaticQuery, graphql } from 'gatsby';
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
		this._selected = this._selected.bind(this);
		this._getTreeChildren = this._getTreeChildren.bind(this);
		this._getTreeValues = this._getTreeValues.bind(this);
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
		console.log(tree);
		console.log(tree[0].children);
	
		return tree;
	};

	_getTreeChildren = (data, index) => {
		return data[index].children;
	}

	_getTreeValues = (data) => {
		const test = [];

		data.forEach(blah => {
			test.push(blah.name);
		})

		return test;
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

	_selected = (e) => {
		console.log('value: ' + e.target.value);
		console.log('index: ' + e.target.key);

		this.setState({
			selectedValue: e.target.value,
		});
	}

	render() {
		return (
			<StaticQuery
				query={graphql`
					query SearchIndexQuery {
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

					return (
						<nav className={navbarClasses} id="clay-sidebar">
							<div className={`${styles.sideBarBody} sidebar-body mb-auto mt-5`}>
								<Sidebarselect selectItems={this._getTree(data.allMarkdownRemark.edges)} handleSelect={this._selected} />

								<h2>{this.state.selectedValue}</h2>



								<Navigation sectionList={this._getTree(data.allMarkdownRemark.edges)[this.state.selectedValue].children} location={this.props.location} />
							</div>
						</nav>
					)}
				}
			/>
		);
	}
}


export default Sidebar;