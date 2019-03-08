import React from "react";

const Search = function(props) {
  return (
    <div style={{ border: "1px black solid" }}>
      What topic would you like to search for?
      <form>
        <input
          type="text"
          id="search-text"
          style={{
            width: "700px",
            height: "30px",
            borderRadius: "5px",
            fontSize: "20px"
          }}
        />
        <button type="button">Search</button>
      </form>
    </div>
  );
};

export default Search;
