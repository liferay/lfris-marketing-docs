import React from "react"
import { navigate } from "gatsby"

const SearchForm = ({ query, onChangeEvent }) => (
  <form role="search" method="GET">
  {query}
    <label htmlFor="search-input">
      <h1>Search posts</h1>
    </label>
    <input
      type="search"
      id="search-input"
      name="keywords"
      aria-controls="search-results-count"
      onChange={onChangeEvent}
      value={query}
    />
    <button type="submit">Submit</button>
  </form>
)

export default SearchForm