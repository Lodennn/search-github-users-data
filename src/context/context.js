import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

export const GithubContext = React.createContext();

export default (props) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);

  const contextValue = {
    user: githubUser,
    repos: githubRepos,
    followers: githubFollowers,
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {props.children}
    </GithubContext.Provider>
  );
};
