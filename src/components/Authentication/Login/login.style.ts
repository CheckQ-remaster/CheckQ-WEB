import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: gold;

  button {
    font-size: 15px;
    background-color: white;
    color: black;
    width: 100px;
    height: 40px;

    box-shadow: 4px 4px 15px 0px #0000001a;
    border-radius: 10px;
    border: none;
    border-color: gray;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    :hover {
      background-color: #3fe2a6;
      color: white;
      transition-duration: 0.5s;
    }
  }
`;

export const IdandPW = styled.input`
  width: 200px;
  height: 80px;

  display: flex;

  border: none;
`;
