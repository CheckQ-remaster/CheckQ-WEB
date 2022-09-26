import React from "react";
import { useState } from "react";
import * as S from "./Reservation.style";
import HotelContainer from "./Hotel/HotelInfo";

const Reservation = () => {
  return (
    <S.Container>
      <input type="text" placeholder="검색" />
      <HotelContainer />
    </S.Container>
  );
};

export default Reservation;
