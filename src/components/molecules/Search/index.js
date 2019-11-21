import React, { Component } from "react"
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import styles from './styles.module.scss'
import { Index } from "elasticlunr"
import { StaticQuery, graphql } from 'gatsby'

class Search extends Component {
  constructor(props) {
    super(props)

    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);

    this.state = {
      query: new URLSearchParams(this.props.location.search).get("keywords") || '',
      results: Index.load(this.props.searchIndex)
      .search((new URLSearchParams(this.props.location.search).get("keywords") || ''), { expand: true })
      .map(({ ref }) => Index.load(this.props.searchIndex).documentStore.getDoc(ref)),
    }
  }

  handleInputBlur(evt) {
    if(!this.props.location.pathname.includes('/search')) {
      this.setState({
        results: ''
      })  
    }
  }

  handleInputFocus(evt) {
    this.search(evt, this.state.query);
  }

  render() {
    const childClass = (this.props.childClass ? styles[this.props.childClass] : '')
    const entryNumber = 5;

    return (    
      <div className={childClass + ' ' + styles.searchContainer} onBlur={this.handleInputBlur}>
        <SearchForm inputFocusEvent={this.handleInputFocus} inputBlurEvent={this.handleInputBlur} query={this.state.query} onChangeEvent={evt => this.search(evt, this.state.query)} />

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

export default (props) => (
  <StaticQuery 
    query={graphql`
      query SearchIndex {
        siteSearchIndex {
          index
        }
      }
    `}
    
    render={data => {
      return (
        <Search {...props} searchIndex={data.siteSearchIndex.index} />
      )
    }
    }
  />
);