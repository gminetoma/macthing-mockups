import "../styles/Search.css";

const Search = () => {
  return (
    <>
      <div className="search roboto-regular">
        <input
          className="search__input"
          type="text"
          placeholder="Search for meaning..."
        />
        <button className="search__button">Search</button>
      </div>
    </>
  );
};

export default Search;
