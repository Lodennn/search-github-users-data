import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  console.log(isAuthenticated, user, isUser);
  return (
    <Switch>
      <Route path="/" exact>
        {isUser && <Dashboard />}
        {!isUser && <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        {isUser && <Redirect to="/" />}
        {!isUser && <Login />}
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}

export default App;
