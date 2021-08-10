import React, { useState, useEffect, useCallback } from "react";
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
  const [request, setRequest] = useState({});
  const [httpData, setHttpData] = useState({ error: null, isLoading: false });

  const checkRequests = useCallback(() => {
    setHttpData({
      isLoading: true,
      error: null,
    });
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let { rate } = data;
        setRequest(rate);
        if (rate.remaining === 0) {
          // throw new error
          setHttpData({
            isLoading: false,
            error: "Sorry, you have used your requests hourly limits",
          });
          return;
        }
      })
      .catch((err) => {
        setHttpData({
          ...httpData,
          error: err.message,
        });
      });
  }, [rootUrl]);

  const fetchUserData = useCallback(async (searchValue) => {
    setHttpData({
      error: null,
      isLoading: true,
    });
    try {
      const responseUserData = await fetch(`${rootUrl}/users/${searchValue}`);
      const responseReposData = await fetch(
        `${rootUrl}/users/${searchValue}/repos?per_page=100`
      );
      const responseFollowersData = await fetch(
        `${rootUrl}/users/${searchValue}/followers`
      );

      if (!responseUserData.ok) throw new Error("User not found");
      if (!responseReposData.ok) throw new Error("Repos not found");
      if (!responseFollowersData.ok) throw new Error("Followers not found");
      setHttpData({
        ...httpData,
        isLoading: false,
      });
      const [userResponse, reposResponse, followersResponse] =
        await Promise.all([
          responseUserData,
          responseReposData,
          responseFollowersData,
        ]);
      setHttpData({
        ...httpData,
        isLoading: false,
      });
      const userData = await userResponse.json();
      const reposData = await reposResponse.json();
      const followersData = await followersResponse.json();

      setGithubUser(userData);
      setGithubRepos(reposData);
      setGithubFollowers(followersData);
    } catch (err) {
      setHttpData({
        ...httpData,
        error: err.message,
      });
    }
  }, []);

  useEffect(checkRequests, [checkRequests]);

  const contextValue = {
    user: githubUser,
    repos: githubRepos,
    followers: githubFollowers,
    fetchData: fetchUserData,
    request,
    httpData,
    setHttpData,
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {props.children}
    </GithubContext.Provider>
  );
};
