import React, { useState } from "react";
import * as S from "./HotelInfo.style";
import GPS from "../../../../assets/image/Reservation/GPS.png";

import testHotel from "../../../../assets/image/Reservation/testHotel.png";

const HotelContainer = () => {
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
      {HotelInfo.map((e, i) => {
        return (
          <S.HotelContainer key={i}>
            <S.HotelInfo>
              <img src={`${testHotel}`} id="hotel" />
              <p>{e.name}</p>
              <div>
                <img src={`${GPS}`} id="GPS" />
                <h3>{e.location}</h3>
              </div>
            </S.HotelInfo>
          </S.HotelContainer>
        );
      })}
    </S.Container>
  );
};

export default HotelContainer;
