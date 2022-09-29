import React, { useEffect } from "react";
import * as S from "./Reservation.style";
import HotelContainer from "./Hotel/HotelInfo";
import { API } from "util/axios";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";

const Reservation = () => {
  const [headerItem, setHeaderItem] = useRecoilState(headState);
  
  const search = async(e: any) => {
    await API.get(`/hotelsearch?hotel=${e.target.value}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  };

  const onKeyPress = (e:HTMLInputElement) => {
    if(e.key == 13){
      search(e.target.value)
    }
  }
  
  useEffect(() => {
    setHeaderItem('예약')
  }, [setHeaderItem])

  return (
    <S.Container>
      <input type="text" placeholder="검색" onKeyUp={onKeyPress}/>
      <HotelContainer />
    </S.Container>
  );
};

export default Reservation;
