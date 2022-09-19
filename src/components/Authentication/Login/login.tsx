import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./login.style";
import QR from "../../../assets/image/Login/QrCode.png";

const Login = () => {
  return (
    <Container>
      <img src={QR}></img>
      <p>
        <strong>QR</strong> 코드로
        <br />
        간편히 체크인해 보세요
      </p>
      <button id="login">로그인</button>
      <button id="register">회원가입</button>
    </Container>
  );
};

export default Login;
