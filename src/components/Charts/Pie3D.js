// Include react
import React from "react";

// Include the chart type
import Chart from "../UI/Chart";

const PieChart = (props) => {
  return (
    <Chart
      config={{
        type: "pie2d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            caption: "Languages",
            theme: "fusion",
            decimals: 0,
            pieRadius: "40%",
          },
          // Chart Data
          data: props.chartdata,
        },
      }}
    />
  );
};

export default PieChart;
