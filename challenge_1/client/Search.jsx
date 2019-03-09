import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Search = function({ setSearch, setPage }) {
  const onSend = function(e) {
    e.preventDefault;
    const search = `q=${document.getElementById("search-topic").value}&`;
    setPage(1);
    setSearch(search);
  };

  return (
    <div style={{ height: "50px" }}>
      <form>
        Please enter a keyword:{" "}
        <input
          type="text"
          id="search-topic"
          style={{
            width: "300px",
            height: "30px",
            borderRadius: "5px",
            fontSize: "20px",
            outline: "none"
          }}
        />
        &nbsp;
        <button type="button" onClick={e => onSend(e)}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
