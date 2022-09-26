import React from "react";
import * as S from "./Reservation.style";
import HotelContainer from "./Hotel/HotelInfo";
import SearchIcon from "../../../assets/image/Reservation/search.png";

const Reservation = () => {
  return (
    <S.Container>
      <div>
        <img src={SearchIcon} alt="검색" />
        <input type="text" placeholder="검색" />
      </div>
    </S.Container>
  );
};

export default Reservation;
