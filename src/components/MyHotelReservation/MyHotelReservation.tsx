import React, { useState, useEffect } from "react";
import * as S from "./MyHotelReservation.style";

import testHotel from "../../assets/image/Reservation/testHotel.png";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";

const MyHotelReservation = () => {
  const navigate = useNavigate();
  const [headerItem, setHeaderItem] = useRecoilState(headState);

  const [reservationInfo, setReservationInfo] = useState([
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      hotelName: "나인트리 프리미어 호텔",
      roomName: "스탠다드 트윈룸",
    }
  ]);

  useEffect(() => {
    setHeaderItem('내 예약');
  }, [])

  return (
    <S.Container>
      {reservationInfo.map(({ img, hotelName, roomName }, idx) => {
        return (
          <S.HotelContainer
            key={idx}
            onClick={() => {
              setHeaderItem(roomName)
              navigate(`/myreservation/:id`);
            }}
          >
            <S.HotelInfo>
              <img src={testHotel} id="hotel" />
              <h2>{hotelName}</h2>
              <h3>{roomName}</h3>
            </S.HotelInfo>
          </S.HotelContainer>
        );
      })}
    </S.Container>
  );
};

export default MyHotelReservation;
