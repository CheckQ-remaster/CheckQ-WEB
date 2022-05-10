import styled from "styled-components";
import React, { useEffect } from "react";
import * as L from "./login.style";
import * as P from "../../../../Public.style";

const Login = () => {
  return (
    <L.Container>
      <L.IdandPw type="id" name="id를 입력하세요" />
      <L.IdandPw type="password" name="비밀번호를 입력하세요" />

      <input
        type="file"
        id="imgUpload"
        accept="image/*"
        onChange={saveFileImage}
        style={{ display: "none" }}
      />

      <L.Label for="imgUpload">로그인</L.Label>
    </L.Container>
  );
};

export default Login;
