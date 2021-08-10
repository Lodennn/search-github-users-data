import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import DoughnutChart from "../Charts/Doughnut2d";
import { GithubContext } from "../../context/context";

import PieChart from "../Charts/Pie3D";
import ColumnChart from "../Charts/Column3D";
import BarChart from "../Charts/Bar3D";

const Repos = () => {
  const { repos } = useContext(GithubContext);

  // 1st Approach
  let chartData = repos.reduce((acc, item) => {
    const { language, stargazers_count: stars } = item;
    if (!language) return acc;
    if (!acc[language]) {
      acc[language] = {
        label: language,
        value: 1,
        stars,
      };
    } else {
      acc[language] = {
        ...acc[language],
        value: acc[language].value + 1,
      };
    }
    return acc;
  }, {});

  console.log(repos, chartData);

  const sortBy = (data, type) => {
    const sortedData = Object.values(data)
      .sort((a, b) => b[type] - a[type])
      .slice(0, 5);
    return sortedData;
  };

  // moust used
  const mostUsed = sortBy(chartData, "value");

  // stars per language
  const mostPopular = sortBy(chartData, "stars").map((item) => ({
    ...item,
    value: item.stars,
  }));

  // stars
  const stars = repos
    .map((item) => {
      const { stargazers_count: stars, name } = item;
      return { label: name, value: stars };
    })
    .slice(-5)
    .reverse();

  // forks
  const forks = repos
    .map((item) => {
      const { forks, name } = item;
      return { label: name, value: forks };
    })
    .slice(-5)
    .reverse();

  return (
    <section className="section">
      <Wrapper className="section-center">
        <PieChart chartdata={mostUsed} />
        <ColumnChart chartdata={stars} />
        <DoughnutChart chartdata={mostPopular} />
        <BarChart chartdata={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
