import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import List from "./List";
import Search from "./Search";

const App = function() {
  let [items, setItems] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get("/events?_page=1").then(data => setItems(data.data));
  }, search);

  return (
    <div>
      <Search />
      <List items={items} />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
