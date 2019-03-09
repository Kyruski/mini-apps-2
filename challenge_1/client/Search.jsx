import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchTopic from "./SearchTopic";
import SearchPlace from "./SearchPlace";
import SearchDate from "./SearchDate";

const Search = function(props) {
  return (
    <Router>
      <div /* style={{ border: "1px black solid" }} */>
        Search by:&nbsp;&nbsp;&nbsp;
        <Link to="/Date">Date</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/Place">Place</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/Topic">Topic/Description</Link>
        <div style={{ height: "50px" }}>
          <Route path="/Date" component={() => <SearchDate />} />
          <Route path="/Place" component={() => <SearchPlace />} />
          <Route path="/Topic" component={() => <SearchTopic />} />
        </div>
      </div>
    </Router>
  );
};

export default Search;
