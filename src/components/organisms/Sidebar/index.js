import React from 'react';
import { StaticQuery, graphql, navigate } from 'gatsby';
import SidebarContent from './SidebarContent';
import SidebarSelect from './SidebarSelect';
import styles from './styles.module.scss';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			selectedValue: props.location.pathname.split('/')[1]
		}

		this._findFolder = this._findFolder.bind(this);
		this._getTree = this._getTree.bind(this);
		this._getTreeChildren = this._getTreeChildren.bind(this);
		this._getTreeRootNames = this._getTreeRootNames.bind(this);
		this._handleSelected = this._handleSelected.bind(this);
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

	_getTreeChildren = (data, selectedValue) => {
		const { children } = data.find(obj => {
			return obj.name === selectedValue;
		})

		return children;
	}

	_getTreeRootNames = (data) => {
		const treeRootNames = data.map(treeRootNames => treeRootNames.name)

		return treeRootNames;
	}
	

	_handleSelected = (e, dataTree) => {
		const { link } = dataTree.find(obj => {
			return obj.name === e.target.value;
		});
		
		this.setState({
			selectedValue: e.target.value,
		});

		navigate(link);
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
									excerpt
								}
							}
						}
					}
				`}
				render={data => {
					const { className, location: { pathname }} = this.props;
					const { selectedValue } = this.state;
					const { allMarkdownRemark: { edges }} = data;

					const dataTree = this._getTree(edges);
					const rootLevelNames = this._getTreeRootNames(dataTree);
					const selectedChildren = this._getTreeChildren(dataTree, selectedValue);

					return (
						<div className={`${styles.sidebarContainer} ${className}`}>
							<nav className={styles.sideNav}>
								<SidebarSelect selectItems={rootLevelNames} handleSelected={(e) => this._handleSelected(e,dataTree)} defaultValue={selectedValue} />

								<ul className={styles.sidebarContentWrapper}>
									<SidebarContent path={pathname} tree={selectedChildren} />
								</ul>
							</nav>
						</div>
					)}
				}
			/>
		);
	}
}


export default Sidebar;