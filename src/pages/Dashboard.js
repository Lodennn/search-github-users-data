import React, { useContext } from "react";
import loadingImage from "../assets/preloader.gif";
import { GithubContext } from "../context/context";
import Navbar from "../components/Layouts/Navbar";
import Search from "../components/UI/Search";
import UserInfo from "../components/Users/UserInfo";
import User from "../components/Users/User";
import Repos from "../components/Repos/Repos";

const Dashboard = () => {
  const ctx = useContext(GithubContext);

  return (
    <main>
      <Navbar />
      <Search />
      <UserInfo />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
