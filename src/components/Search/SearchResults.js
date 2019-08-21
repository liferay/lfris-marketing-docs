import React from "react"
import styles from './styles.module.scss'
import { Link } from 'gatsby'

const SearchResults = ({ results, entryNumber }) => (
  <ul className={styles.searchResultsContainer}>
  {results.slice(0, entryNumber).map(page => (
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
)

export default SearchResults