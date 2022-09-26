import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    position: relative;

    width: 303px;
    height: 60px;

    background-color: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
  }

  input {
    width: calc(100% - 62px);
    height: 100%;

    background-color: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: none;
    outline: none;

    padding-inline-start: 62px;

    color: #B4B4B4;
    font-size: 18px;

    &:hover,
    &:focus {
      color: #000000;

      border: 1px solid #2B42BB;
    }
  }
`;
