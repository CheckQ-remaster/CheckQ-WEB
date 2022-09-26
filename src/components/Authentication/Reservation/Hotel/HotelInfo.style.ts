import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 25px;
  overflow-y: auto;

  height: calc(100vh - 264px);
  width: 100%;

  align-items: center;
  padding-top: 15px;
  box-sizing: border-box;

  overflow-y: auto;

  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

export const HotelContainer = styled.div`
  width: 303px;
  height: 388px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  margin-bottom: 40px;
`;

export const HotelInfo = styled.div`
  margin: 24px;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    width: 255px;
    height: 25px;

    h3 {
      margin: 0px 0px 0px 6px;

      font-size: 18px;
      line-height: 26px;

      color: #b4b4b4;
    }
  }

  p {
    font-size: 24px;
    line-height: 35px;
    margin: 14px 0px 11px 0px;

    color: #000000;
  }

  #GPS {
    width: 24px;
    height: 24px;

    margin: 0px;
  }

  #hotel {
    width: 255px;
    height: 255px;
    border-radius: 15px;
    margin: 0px;
  }
`;
