import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import Chart from "./components/Chart";

const App = function(props) {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  const getData = function() {
    Axios.get("https://api.coindesk.com/v1/bpi/historical/close.json").then(
      data => {
        const items = data.data.bpi;
        let newLabels = [];
        let newData = [];
        for (let key in items) {
          newLabels.push(key);
          newData.push(items[key]);
        }
        setData(newData);
        setLabels(newLabels);
      }
    );
  };

  return (
    <div>
      Welcome to the Cryptocurrency Charting Tool
      <Chart
        data={data}
        labels={labels}
        getData={getData}
        style={{ widht: "1000px", height: "800px" }}
      />
      <div />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
