import React, { useState, useRef } from "react";
import { Container } from "./Register.style";

const Register = () => {
  return (
    <Container>
      <div>
        <p>이름</p>
        <input />
      </div>
      <div>
        <p>아이디</p>
        <input />
      </div>
      <div>
        <p>비밀번호</p>
        <input />
      </div>
      <div>
        <p>비밀번호 확인</p>
        <input />
      </div>
      <button>회원가입</button>
    </Container>
  );
};

export default Register;
