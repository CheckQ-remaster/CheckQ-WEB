import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "./login.style";

const Login = () => {
  return (
    <L.Container>
      <L.IdandPW type="id" placeholder="id를 입력하세요" />
      <L.IdandPW type="password" placeholder="비밀번호를 입력하세요" />
      <button>로그인</button>
    </L.Container>
  );
};

export default Login;
