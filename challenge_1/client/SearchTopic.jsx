import React from "react";

const SearchTopic = function(props) {
  return (
    <div style={{ height: "50px" }}>
      <form>
        Please enter a topic:{" "}
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
        <button type="button">Search</button>
      </form>
    </div>
  );
};

export default SearchTopic;
