import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link, navigate } from "gatsby"
import styles from './styles.module.scss'
import SearchResults from './SearchResults'
import SearchForm from './SearchForm'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: new URLSearchParams(this.props.location.search).get("keywords") || '',
      results: Index.load(this.props.searchIndex)
      .search((new URLSearchParams(this.props.location.search).get("keywords") || ''), { expand: true })
      .map(({ ref }) => Index.load(this.props.searchIndex).documentStore.getDoc(ref)),
    }
  }

  render() {
    const entryNumber = 5;

    const childClass = (this.props.childClass ? styles[this.props.childClass] : '')

    return (    
      <div className={childClass + ' ' + styles.searchContainer}>
        {console.log('results: ' + this.state.results)}
        {console.log('query: ' + this.state.query)}

        <SearchForm query={this.state.query} onChangeEvent={evt => this.search(evt, this.state.query)} />

        {this.state.results.length > 0 ?
          <SearchResults results={this.state.results} entryNumber={entryNumber} />
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

  search = (evt) => {
    navigate(`/search?keywords=${encodeURIComponent(evt.target.value)}`)
    
    const query = evt.target.value;

    this.index = this.getOrCreateIndex()

    this.setState({
      query,
	    results: this.index
      .search(query, { expand: true })
      .map(({ ref }) => this.index.documentStore.getDoc(ref)),
	  })
  }
}