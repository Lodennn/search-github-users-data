import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

export const GithubContext = React.createContext();

export default (props) => (
  <GithubContext.Provider value={"Hello Context"}>
    {props.children}
  </GithubContext.Provider>
);
