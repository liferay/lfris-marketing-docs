import React from "react"
import styles from "./styles.module.scss"
import { navigate } from "@reach/router"
import { withPrefix } from "gatsby"

const SearchForm = ({ query, onChangeEvent, inputFocusEvent }) => (
  <form
    className={styles.searchForm}
    onSubmit={evt => navigate(`/search?keywords=${encodeURIComponent(query)}`)}
    role="search" method="GET"
  >
    <input
      aria-controls="search-results-count"
      className={styles.searchInput}
      id="search-input"
      name="keywords"
      onChange={onChangeEvent}
      onFocus={inputFocusEvent}
      type="search"
      value={query}
    />
    <button className={styles.searchButton} type="submit">
      <svg className={styles.lexiconIcon}>
        <use xlinkHref={withPrefix("images/icons/icons.svg#search")} />
      </svg>
    </button>
  </form>
)

export default SearchForm