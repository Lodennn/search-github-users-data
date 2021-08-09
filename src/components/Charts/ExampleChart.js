// Include react
import React from "react";

// Include the chart type
import Chart from "../UI/Chart";

const ExampleChart = (props) => {
  return (
    <Chart
      config={{
        type: "column2d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            //Set the chart caption
            caption: "Countries With Most Oil Reserves [2017-18]",
            //Set the chart subcaption
            subCaption: "In MMbbl = One Million barrels",
            //Set the x-axis name
            xAxisName: "Country",
            //Set the y-axis name
            yAxisName: "Reserves (MMbbl)",
            numberSuffix: "K",
            //Set the theme for your chart
            theme: "fusion",
          },
          // Chart Data
          data: props.chartdata,
        },
      }}
    />
  );
};

export default ExampleChart;
