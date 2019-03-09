import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Search = function(props) {
  return (
    <Router>
      <div style={{ border: "1px black solid" }}>
        What topic would you like to search for?
        <br />
        <Link to="/Date">By Date</Link> - <Link to="/Place">By Place</Link> -{" "}
        <Link to="/Topic">By Topic/Description</Link>
        <Route path="/Date" component={() => <SearchDate />} />
        <Route path="/Place" component={() => <SearchPlace />} />
        <Route path="/Topic" component={() => <SearchTopic />} />
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
    </Router>
  );
};

export default Search;
