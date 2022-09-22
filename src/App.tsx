import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Router from "router/router";

const Background = styled.div`
  width: 100%;
  /* min-height: calc(100vh - 75px); */
  /* margin-top: 75px; */
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;

  box-sizing: border-box;
`;

const App = () => {
  return (
    <Background>
      {/* <AppRouter /> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Background>
  );
};
export default App;
