import React, { useState, useEffect } from "react";
import * as S from "./HotelRservation.style";

import testHotel from "../../assets/image/Reservation/testHotel.png";
import GPS from "../../assets/image/Reservation/GPS.png";
import Time from "../../assets/image/Reservation/time.png";
import Call from "../../assets/image/Reservation/call.png";
import Men from "../../assets/image/Reservation/men.png";
import hotelRoom from "../../assets/image/Reservation/hotelRoom1.png";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";
import { API } from "util/axios";

const HotelRservation = () => {
  const navigate = useNavigate();
  const [headerItem, setHeaderItem] = useRecoilState(headState);

  const [HotelInfo, SetHotelInfo] = useState({
    img: "../../assets/image/Reservation/testHotel.png",
    name: "나인트리 프리미어 호텔 명동 2",
    location: "서울",
    time: "체크인 15:00 ~ 체크아웃 21:00",
    call: "02-6967-0999",
  });

  const [roomInfo, setRoomInfo] = useState([
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      name: "스탠다드 트윈룸",
      people: "2",
    }
  ]);

  const gethotel = async() => {
    await API.get(`/gethotel?hotel=${headerItem}`)
      .then((res) => {
        console.log(res)
        // SetHotelInfo(res.data.data)
        // setRoomInfo(res.data.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    gethotel();
  }, []);

  return (
    <S.Container>
      <S.HotelInfo>
        <img src={testHotel} id="hotel" />
        <h4>{HotelInfo.name}</h4>
        <S.TextContainer>
          <img src={GPS} alt="위치" />
          <p>{HotelInfo.location}</p>
        </S.TextContainer>
        <S.TextContainer>
          <img src={Time} alt="위치" />
          <p>{HotelInfo.time}</p>
        </S.TextContainer>
        <S.TextContainer>
          <img src={Call} alt="위치" />
          <p>{HotelInfo.call}</p>
        </S.TextContainer>
      </S.HotelInfo>

      <div style={{ marginBottom: "40px" }}>
        <S.RoomContainer>
          {roomInfo.map(({ img, name, people }, idx) => {
            return (
              <S.HotelContainer key={idx} onClick={() => {
                                                          setHeaderItem(name)
                                                          navigate(`/reservation/:id/:room`)
                                                          }}>
                <S.HotelRoomInfo>
                  <img src={hotelRoom} id="hotel" alt={name} />
                  <h2>{name}</h2>
                  <div>
                    <img src={Men} id="GPS" alt="위치" />
                    <h3>{people}인</h3>
                  </div>
                </S.HotelRoomInfo>
              </S.HotelContainer>
            );
          })}
        </S.RoomContainer>
      </div>
    </S.Container>
  );
};

export default HotelRservation;
