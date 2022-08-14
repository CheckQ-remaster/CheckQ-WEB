import React, { useState } from "react";
import { customAxios } from "../../lib/axios/customAxios";

const Register = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 

  const onNameHandler = (e) => setName(e.target.value);
  const onIdHandler = (e) => setId(e.target.value);
  const onPasswordHandler = (e) => setPassword(e.target.value);
  const onConfirmPassdHandler = (e) => setConfirmPassword(e.target.value);

  const onSubmit = async(e) => {
    e.preventDefault();
    if(password !== confirmPassword) return alert("비밀번호가 다릅니다.");
    await customAxios.post('/signup',{
      name: name,
      id: id,
      password: password,
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log("faild",error);
    });
  };

  return (
    <>
      <h2>회원가입</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={onNameHandler}
        />
        <input 
          type="text"
          name="id"
          value={id}
          placeholder="new-ID"
          onChange={onIdHandler}
        />
        <input 
          type="password"
          name="password"
          value={password}
          placeholder="new-PW"
          onChange={onPasswordHandler}
        />
        <input 
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="PW-check"
          onChange={onConfirmPassdHandler}
        />
        <button>Sign Up</button>
      </form>
    </>
  );
};

export default Register;