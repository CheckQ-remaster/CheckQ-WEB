import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  div {
    p {
      height: 26px;
      font-size: 18px;

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
      margin-top: 12px;

      width: 303px;
      height: 62px;
    }
  }
  button {
    width: 303px;
    height: 62px;

    background: #000000;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    margin-top: 52px;

    font-size: 24px;
    text-align: center;

    color: #ffffff;
  }
`;
