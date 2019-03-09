import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import List from "./List";
import Search from "./Search";
import ReactPaginate from "react-paginate";

const App = function() {
  let [items, setItems] = useState([]);
  let [search, setSearch] = useState("");
  let [page, setPage] = useState(1);
  let [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    Axios.get(`/events?${search}`).then(data =>
      setTotalPages(data.data.length / 10)
    );
    Axios.get(`/events?${search}_page=${page}`).then(data =>
      setItems(data.data)
    );
  }, [search, page]);

  return (
    <div>
      <Search setSearch={setSearch} setPage={setPage} />
      <List items={items} />
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={e => setPage(e.selected + 1)}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
