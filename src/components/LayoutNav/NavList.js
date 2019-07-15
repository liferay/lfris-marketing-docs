import React from 'react';
import Login from '../Login';
import { StaticQuery, graphql, Link } from 'gatsby';

const getRootFolders = data => {
	let rootFolders = [];
	let paths = data.allMarkdownRemark.edges.map(({node}) => {
		const { fields: { slug } } = node;

		return slug.startsWith('/') ? slug.slice(1).split('/') : slug.split('/');
	});

	paths.forEach(path => {
        const rootFolderName = path[0];
        const existingFolder = findFolder(rootFolders, 'name', rootFolderName);
        
        if (!existingFolder) {
            var newFolder = {
                link: '/' + path.join('/').replace(/.html|.md|.mdx/g, ''),
                name: rootFolderName.replace(/.html|.md|.mdx/g, '')
            };

            rootFolders.push(newFolder);
        }
	});

	return rootFolders;
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

function createProperName(name) {
    return name.toLowerCase().split('-').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
}

class NavList extends React.Component {
    render() {
        const folders = this.props.folders;

        return (
            <ul className="navbar-nav ml-md-auto">
                { 
                    folders && folders.map((folder, index) => 
                        <li className="nav-item" key={index}>
                            <Link className="nav-link ml-lg-3" to={folder.link}>{createProperName(folder.name)}</Link>
                        </li>
                    )
                }

                <li className="nav-item">
                    <Login />
                </li>
            </ul>
        );
    }
};

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                allMarkdownRemark(filter: { fields: { slug: { regex: "//i" } } }) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <NavList folders={getRootFolders(data)}/>
        )}
    />
)