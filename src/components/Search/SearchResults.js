import React from "react"
import styles from './styles.module.scss'
import { Link } from 'gatsby'

const SearchResults = ({ results, entryNumber }) => (
  <ul className={styles.searchResultsContainer}>
    {results.slice(0, entryNumber).map(page => (
      <li className={styles.searchResultsItem} key={page.id}>
        <Link to={`${page.path}`}>
            <h4 className={styles.resultsTitle}>
              {page.title}
            </h4>

            <div className={styles.resultsDescription}>
              {page.description ? page.description : page.excerpt}
            </div>

            <div className={styles.resultsPath}>
              {page.path ? page.path : ''}
            </div>
        </Link>
      </li>
    ))
  }
</ul>
)

export default SearchResults