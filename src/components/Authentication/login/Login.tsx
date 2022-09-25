import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container } from "./Login.style";
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
        <div>
          <label>아이디</label>
          <input 
            type="text" 
            {...register('user_id', {
              required: true
            })} />
        </div>
        <div>
          <label>비밀번호</label>
          <input 
            type="password" 
            {...register('password', {
              required: true
            })} />
        </div>
        <button type="submit">로그인</button>
      </form>
      <div>
        회원이 아니신가요?
        <a href="/register">회원가입</a>
      </div>
    </Container>
  );
};

export default Login;
