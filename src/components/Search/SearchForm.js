import React from "react"
import { navigate } from "gatsby"

const SearchForm = ({ query, onChangeEvent }) => (
  <form role="search" method="GET" onSubmit={evt =>    navigate(`/search?keywords=${encodeURIComponent(evt.target.value)}`)
}>
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