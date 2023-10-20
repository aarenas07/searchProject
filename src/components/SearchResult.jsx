import "./SearchResult.css"

// eslint-disable-next-line react/prop-types
export const SearchResult = ({result}) => {

    const handleClick = () =>{
        // eslint-disable-next-line react/prop-types
        console.log(`Seleccionaste a ${result.name}`);
    }
  return (
    // eslint-disable-next-line react/prop-types
    <div onClick={handleClick} className="search-result">{result.name}</div>
  )
}
