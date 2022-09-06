import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>메인 메뉴</h2>
      <button onClick={() => navigate("/reservation")}>예약하기</button>
      <button onClick={() => navigate("/myPage")}>나의 예약</button>
      <button>Logout</button>
    </>
  );
};

export default Main;
