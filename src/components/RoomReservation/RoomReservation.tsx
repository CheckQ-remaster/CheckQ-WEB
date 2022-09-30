import React, { useEffect, useState } from "react";
import * as S from "./RoomReservation.style";
import Calender from "./Calender/Calender";

import hotelRoom from "../../assets/image/Reservation/hotelRoom1.png";
import men from "../../assets/image/Reservation/men.png";

const RoomReservation = () => {
  const [roomInfo, setRoomInfo] = useState({
    img: "../../assets/image/Reservation/hotelRoom1.png",
    name: "나인트리 프리미어 호텔 명동 2",
    people: "2",
    price: "91,200",
  });

  let stPeople: number[] = [];
  const makeStPeople = () => {
    // Number(roomInfo.people)
    for (let i = 0; i < Number(roomInfo.people); i++) {
      stPeople[i] = i + 1;
    }

    console.log(stPeople);
  };

  useEffect(() => {
    makeStPeople();
  }, [roomInfo]);

  return (
    <S.Container>
      <S.RoomInfo>
        <img id="room" src={hotelRoom} />
        <h2>{roomInfo.name}</h2>
        <div>
          <img id="people" src={men} />
          <h3>{roomInfo.people}인</h3>
          <h2>{roomInfo.price}원</h2>
        </div>
        <h3 id="day">1박 기준</h3>
      </S.RoomInfo>
      <S.CalculatorContainer>
        <Calender peopleCnt={stPeople} />
      </S.CalculatorContainer>
    </S.Container>
  );
};

export default RoomReservation;
