import React from "react";

const SearchDate = function(props) {
  return (
    <div style={{ height: "50px" }}>
      <form>
        Please select a date: Year (required):
        <input
          type="text"
          id="search-date"
          style={{
            width: "100px",
            height: "30px",
            borderRadius: "5px",
            fontSize: "20px",
            outline: "none"
          }}
        />
        <select>
          <option value="" />
        </select>
        &nbsp;
        <button type="button">Search</button>
      </form>
    </div>
  );
};

export default SearchDate;
