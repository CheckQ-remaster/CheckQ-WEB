import React, { useState } from "react";
import * as S from "./HotelInfo.style";

import GPS from "../../../assets/image/Reservation/GPS.png";
import testHotel from "../../../assets/image/Reservation/testHotel.png";
import { useNavigate } from "react-router-dom";

const HotelContainer = () => {
  const navigate = useNavigate();

  const [HotelInfo, SetHotelInfo] = useState([
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
    {
      img: "../../../assets/image/Reservation/testHotel.png",
      name: "나인트리 프리미어 호텔",
      location: "서울",
    },
  ]);

  return (
    <S.Container>
      {HotelInfo.map(({ img, name, location }, idx) => {
        return (
          <S.HotelContainer key={idx} onClick={() => navigate(`/reservation/:id`)}>
            <S.HotelInfo>
              <img src={testHotel} id="hotel" alt={name} />
              <h2>{name}</h2>
              <div>
                <img src={GPS} id="GPS" alt="위치" />
                <h3>{location}</h3>
              </div>
            </S.HotelInfo>
          </S.HotelContainer>
        );
      })}
    </S.Container>
  );
};

export default HotelContainer;
