import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Search from "../components/UI/Search";
import UserInfo from "../components/Users/UserInfo";
import User from "../components/Users/User";
import Repos from "../components/Repos/Repos";

const Dashboard = () => {
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

export default React.memo(Dashboard);
