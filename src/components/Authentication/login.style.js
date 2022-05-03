import styled from "styled-components";

export const IdandPW = styled.input`
  width: 200px;
  height: 200px;
`;

export const Label = styled.label`
  font-size: 15px;
  display: flex;
  background-color: white;
  color: black;
  width: 100px;
  height: 40px;
  cursor: pointer;
  box-shadow: 4px 4px 15px 0px #0000001a;
  border-radius: 10px;
  border: none;
  border-color: gray;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #3fe2a6;
    color: white;
    transition-duration: 0.5s;
  }
`;
