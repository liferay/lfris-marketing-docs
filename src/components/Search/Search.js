import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link, navigate } from "gatsby"
import styles from './styles.module.scss'

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    const entryNumber = 5;

    const childClass = (this.props.childClass ? styles[this.props.childClass] : '')

    return (
      <div className={childClass + ' ' + styles.searchContainer}>
        <input type="text" value={this.state.query} onChange={this.search} />

        {this.state.results.length > 0 ?
          <ul className={styles.searchResultsContainer}>
          {this.state.results.slice(0, entryNumber).map(page => (
            <li className={styles.searchResultsItem} key={page.id}>
              <Link to={page.path}>
                  <h4>
                    {page.title}
                  </h4>

                  <span>
                    {page.description ? page.description : page.excerpt}
                  </span>
              </Link>
            </li>
          ))}
        </ul>
        :
        ''
        }
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value

    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
	  results: this.index
		.search(query, { expand: true }) // Accept partial matches
		// Map over each ID and return the full document
		.map(({ ref }) => this.index.documentStore.getDoc(ref)),
	})
  }
}