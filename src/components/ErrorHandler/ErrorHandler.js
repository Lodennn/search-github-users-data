import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../assets/preloader.gif";
import { useAuth0 } from "@auth0/auth0-react";

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  align-content: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;

const ErrorHandler = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>Sorry, this page you are looking for is not found</h3>
      {isAuthenticated && (
        <Link to="/" className="btn">
          Back home
        </Link>
      )}
      {!isAuthenticated && (
        <Link to="/login" className="btn">
          Login
        </Link>
      )}
    </Wrapper>
  );
};

export default ErrorHandler;
