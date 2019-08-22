import React from "react"
import { navigate, withPrefix } from "gatsby"
import styles from "./styles.module.scss"

const SearchForm = ({ query, onChangeEvent, inputBlurEvent, inputFocusEvent }) => (
  <form className={styles.searchForm} role="search" method="GET" onSubmit={evt => navigate(`/search?keywords=${encodeURIComponent(evt.target.value)}`)
}>
    <input
      className={styles.searchInput}
      type="search"
      id="search-input"
      name="keywords"
      aria-controls="search-results-count"
      onChange={onChangeEvent}
      value={query}
      onBlur={inputBlurEvent}
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