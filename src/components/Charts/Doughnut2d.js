// Include react
import React from "react";
// Include the theme as fusion
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

import Chart from "../UI/Chart";

const DoughnutChart = (props) => {
  return (
    <Chart
      config={{
        type: "doughnut2d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            //Set the chart caption
            caption: "Stars per language",
            theme: "candy",
            showPercentValues: 0,
          },
          // Chart Data
          data: props.chartdata,
        },
      }}
      theme={CandyTheme}
    />
  );
};

export default DoughnutChart;
