import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container } from "./Login.style";
import { Btn, InputWrapper, ErrorMsg, GoNavBox } from "../register/Register.style";
import LoginImg from "../../../assets/image/Login/LoginImg.png";

interface Inputs {
  user_id: string,
  password: string,
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Container>
      <img src={LoginImg} alt="로그인"/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <label>아이디</label>
          <input 
            type="text" 
            {...register('user_id', {
              required: true
            })} />
        </InputWrapper>
        <InputWrapper>
          <label>비밀번호</label>
          <input 
            type="password" 
            {...register('password', {
              required: true
            })} />
        </InputWrapper>
        <ErrorMsg></ErrorMsg>
        <Btn type="submit">로그인</Btn>
      </form>
      <GoNavBox>
        회원이 아니신가요?
        <a href="/register">회원가입</a>
      </GoNavBox>
    </Container>
  );
};

export default Login;
