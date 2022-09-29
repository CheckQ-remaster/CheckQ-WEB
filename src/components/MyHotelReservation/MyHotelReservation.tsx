import React, { useState } from "react";
import * as S from "./MyHotelReservation.style";

import testHotel from "../../assets/image/Reservation/testHotel.png";
import { useNavigate } from "react-router-dom";

const MyHotelReservation = () => {
  const navigate = useNavigate();

  const [reservationInfo, setReservationInfo] = useState([
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      hotelName: "나인트리 프리미어 호텔",
      roomName: "스탠다드 트윈룸",
    },
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      hotelName: "나인트리 프리미어 호텔",
      roomName: "스탠다드 트윈룸",
    },
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      hotelName: "나인트리 프리미어 호텔",
      roomName: "스탠다드 트윈룸",
    },
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      hotelName: "나인트리 프리미어 호텔",
      roomName: "스탠다드 트윈룸",
    },
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      hotelName: "나인트리 프리미어 호텔",
      roomName: "스탠다드 트윈룸",
    },
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      hotelName: "나인트리 프리미어 호텔",
      roomName: "스탠다드 트윈룸",
    },
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      hotelName: "나인트리 프리미어 호텔",
      roomName: "스탠다드 트윈룸",
    },
  ]);

  return (
    <S.Container>
      {reservationInfo.map(({ img, hotelName, roomName }, idx) => {
        return (
          <S.HotelContainer
            key={idx}
            onClick={() => {
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
