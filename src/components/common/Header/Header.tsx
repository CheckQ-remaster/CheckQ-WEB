import React from "react";
import { useNavigate } from "react-router-dom";
import * as H from "./Header.style";
import backImg from "../../../assets/image/Icon/back.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <H.Container>
      <nav>
        <H.ContentWrapper>
          <button onClick={() => navigate(-1)}>
            <img src={backImg} alt="뒤로가기" />
          </button>
          <H.Content>스탠다드 트윈룸</H.Content>
        </H.ContentWrapper>
      </nav>
    </H.Container>
  )
};

export default Header;
