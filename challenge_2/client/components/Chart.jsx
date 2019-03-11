import React, { useState, useEffect } from "react";
const LineChart = require("react-chartjs").Line;

const Chart = ({ data, labels, getData }) => {
  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div>
      BTC to USD:
      <br />
      <LineChart
        data={{
          labels,
          datasets: [
            {
              data,
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)"
            }
          ]
        }}
        width="800px"
        height="600px"
      />
      <br />
      <i>Powered by CoinDesk</i>{" "}
      <button
        onClick={e => {
          e.preventDefault;
          getData();
        }}
      >
        Load Graph
      </button>
    </div>
  );
};

export default Chart;
