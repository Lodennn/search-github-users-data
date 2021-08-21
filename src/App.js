import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./pages/PrivateRoute";
import AuthWrapper from "./pages/AuthWrapper";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <AuthWrapper>
      <Switch>
        <PrivateRoute path="/" exact>
          <Dashboard />
        </PrivateRoute>
        <Route path="/login">
          {!isUser && <Login />}
          {isUser && <Redirect to="/" />}
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </AuthWrapper>
  );
}

export default App;
