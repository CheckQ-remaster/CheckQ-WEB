import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
`;

export const ChekPersonBox = styled.div`
  button {
    width: 137px;
    height: 52px;

    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: none;
    outline: none;

    font-size: 18px;
    
    &:first-child {
      margin-right: 29px;
    }

    &:hover {
      background: #2B42BB;
      color: #FFFFFF
    }
  }


`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    height: 26px;
    font-size: 16px;

    margin-top: 14px;
    margin-bottom: 0px;
    color: #b4b4b4;
  }

  input {
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    border: none;
    outline: none;

    font-size: 18px;
    padding-left: 24px;
    box-sizing: border-box;
    margin-top: 8px;

    width: 303px;
    height: 52px;

    &:hover,
    &:focus {
      border: 1px solid #2B42BB;
    }
  }
`;

export const ErrorMsg = styled.p`
  color: #FF4F4F;
  font-size: 12px;
  text-align: right;
`;

export const RegisterBtn = styled.button`
  width: 303px;
  height: 52px;

  background: #000000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin-top: 28px;

  font-size: 18px;
  text-align: center;

  color: #ffffff;
`;

export const LoginBox = styled.div`
  color: #DBDBDB;

  margin-top: 56px;

  font-size: 18px;

  a{
    color: #2B42BB;
    text-decoration: none;
  }
`;