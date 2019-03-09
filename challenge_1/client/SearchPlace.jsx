import React from "react";

const SearchPlace = function(props) {
  return (
    <div style={{ height: "50px" }}>
      <form>
        Please enter a location:{" "}
        <input
          type="text"
          id="search-place"
          style={{
            width: "300px",
            height: "30px",
            borderRadius: "5px",
            fontSize: "20px",
            outline: "none"
          }}
        />
        &nbsp;
        <button type="button">Search</button>
      </form>
    </div>
  );
};

export default SearchPlace;
