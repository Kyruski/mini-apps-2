import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import PlayArea from "./components/PlayArea";

const App = function() {
  return (
    <div>
      Welcome to the Bowling Score Card App
      <PlayArea />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
