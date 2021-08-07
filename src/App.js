import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
