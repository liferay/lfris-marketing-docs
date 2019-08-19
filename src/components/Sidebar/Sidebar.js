import { StaticQuery, graphql } from 'gatsby';
import Navigation from './Navigation';
import React from 'react';
import Search from './Search';

const SideNavRef = React.createRef();

const getTree = data => {
	let tree = [];
	let paths = data.allMarkdownRemark.edges.map(({node}) => {
		const { fields: { slug } } = node;

		return slug.startsWith('/') ? slug.slice(1).split('/') : slug.split('/');
	});

	paths.forEach(path => {
        var currentLevel = tree;
        path.forEach((folder, index) => {	
			var existingPath = findFolder(currentLevel, 'name', folder);
	
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

function findFolder(array, key, value) {
	var t = 0;
	while (t < array.length && array[t][key] !== value) { t++; };

	if (t < array.length) {
		return array[t]
	} else {
		return false;
	}
}

let scrollTop = 0;

class SideNavScroll extends React.Component {
	onScroll(event) {
		scrollTop = event.currentTarget.scrollTop;
	}

	componentDidMount() {
		SideNavRef.current.scrollTop = scrollTop;
	}

	render() {
		return (
			<div
				ref={SideNavRef}
				onScroll={this.onScroll.bind(this)}
				className="sidebar sidebar-clay-site sidenav-menu d-flex flex-column"
			>
				{this.props.children}
			</div>
		);
	}
}

export default (props) => (
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
							}
						}
					}
				}
				siteSearchIndex {
					index
				}
			}
		`}
		render={data => {

			let navbarClasses = 'sidebar-toggler-content sidenav-fixed sidenav-menu-slider mt-5';
			if (props.navbarToggled) {
				navbarClasses += ' toggler-expanded';
			}

			return (
				<nav className={navbarClasses} id="clay-sidebar">
					<SideNavScroll>
						<div className="sidebar-body mb-auto mt-5">
							<Search searchIndex={data.siteSearchIndex.index} />

							<Navigation sectionList={getTree(data)} location={props.location} />
						</div>
					</SideNavScroll>
				</nav>
			)}
		}
	/>
);
