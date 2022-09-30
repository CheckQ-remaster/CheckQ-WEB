import React, { useEffect, useState } from "react";
import * as S from "./Reservation.style";
import HotelContainer from "./Hotel/HotelInfo";
import { API } from "util/axios";
import { useRecoilState } from "recoil";
import { headState } from "store/header/headState";

export interface ISearchItem {
  img: string,
  hotel: string,
  location: string
}

const Reservation = () => {
  const [headerItem, setHeaderItem] = useRecoilState(headState);
  const [item, setItem] = useState('');
  const [searchItem, setSearchItem] = useState<ISearchItem[]>([]);
  
  const search = async(value:string) => {
    await API.get(`/hotelsearch?hotel=${value}`)
    .then((res) => setSearchItem(res.data.data))
    .catch((err) => console.log(err))
  };

  const onKeyPress = (e: any) => {
    if(e.key === 'Enter'){
      search(e.target.value)
    }
  }
  
  useEffect(() => {
    setHeaderItem('예약')
  }, [setHeaderItem])

  return (
    <S.Container>
      <input type="text" placeholder="검색" value={item} onChange={(e) => setItem(e.currentTarget.value)} onKeyPress={onKeyPress}/>
      <HotelContainer searchItem={searchItem}/>
    </S.Container>
  );
};

export default Reservation;
