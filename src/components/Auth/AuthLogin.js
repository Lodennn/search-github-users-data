import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../../assets/login-img.svg";

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

const AuthLogin = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github users login" />
        <h1>Github users</h1>
        <button className="btn">Login</button>
      </div>
    </Wrapper>
  );
};

export default AuthLogin;
