import React from "react"
import { withPrefix } from "gatsby"
import { navigate } from "@reach/router"
import styles from "./styles.module.scss"

const SearchForm = ({ query, onChangeEvent, inputFocusEvent }) => (
  <form
  className={styles.searchForm}
  role="search" method="GET"
  onSubmit={evt => navigate(`/search?keywords=${encodeURIComponent(query)}`)}
  >
    <input
      className={styles.searchInput}
      type="search"
      id="search-input"
      name="keywords"
      aria-controls="search-results-count"
      onChange={onChangeEvent}
      value={query}
      onFocus={inputFocusEvent}
    />
    <button className={styles.searchButton} type="submit">
      <svg className="lexicon-icon">
        <use xlinkHref={withPrefix("images/icons/icons.svg#search")} />
      </svg>
    </button>
  </form>
)

export default SearchForm