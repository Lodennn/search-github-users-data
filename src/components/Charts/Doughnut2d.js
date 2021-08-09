// Include react
import React, { useContext } from "react";
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";
// Include the fusioncharts library
import FusionCharts from "fusioncharts";
// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";
// Include the theme as fusion
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";
// Context
import { GithubContext } from "../../context/context";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, CandyTheme);

const DoughnutChart = () => {
  const { repos } = useContext(GithubContext);

  // 1st Approach
  let chartData = repos.reduce((acc, item) => {
    const { language } = item;
    if (!language) return;

    if (!acc[language]) {
      acc[language] = {
        label: language,
        value: 1,
      };
    } else {
      acc[language] = {
        ...acc[language],
        value: acc[language].value + 1,
      };
    }
    return acc;
  }, {});

  chartData = Object.values(chartData)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const chartConfigs = {
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
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default DoughnutChart;
