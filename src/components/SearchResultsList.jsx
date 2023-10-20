import { SearchResult } from "./SearchResult"
import "./SearchResultsList.css"

// eslint-disable-next-line react/prop-types
export const SearchResultsList = ({results}) => {
  return (
    <div className="results-list">
        {
            // eslint-disable-next-line react/prop-types
            results.map((result, id) => {
                return <SearchResult result={result} key={id}/>
            })
        }
    </div>
  )
}
