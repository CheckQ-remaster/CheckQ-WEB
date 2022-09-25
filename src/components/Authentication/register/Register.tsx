import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { 
  Container,
  ChekPersonBox,
  InputWrapper,
  ErrorMsg,
  RegisterBtn, 
  LoginBox
} from "./Register.style";


interface Inputs {
  name: string,
  user_id: string,
  password: string,
  confirmPassword: string,
}

const Register = () => {
  const { register, watch, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ChekPersonBox>
          <button>
            개인
          </button>
          <button>
            기업
          </button>
        </ChekPersonBox>
        <InputWrapper>
          <label>이름</label>
          <input 
            type="text" 
            {...register("name", {
              required: true
            })}/>
        </InputWrapper>
        <InputWrapper>
          <label>아이디</label>
          <input 
            type="text" 
            {...register("user_id", {
              required: true
            })}/>
        </InputWrapper>
        <InputWrapper>
          <label>비밀번호</label>
          <input 
            type="password" 
            {...register("password", {
              required: true
            })}/>
        </InputWrapper>
        <InputWrapper>
          <label>비밀번호 확인</label>
          <input 
            type="password" 
            {...register("confirmPassword", {
              validate: value => value === watch('password') || "비밀번호가 일치하지 않습니다."
          })}/>
        </InputWrapper>
        <ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>
        <RegisterBtn type="submit">회원가입</RegisterBtn>
      </form>

      <LoginBox>
        회원이신가요?
        <a href="/login">로그인</a>
      </LoginBox>
    </Container>
  );
};

export default Register;