import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  img {
  }

  p {
    text-align: center;
    font-size: 30px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  button {
    width: 303px;
    height: 62px;

    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;

    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #ffffff;
    border: none;
  }

  #login {
    background: #2b42bb;
  }

  #register {
    background: #000000;
    margin-top: 28px;
  }
`;
