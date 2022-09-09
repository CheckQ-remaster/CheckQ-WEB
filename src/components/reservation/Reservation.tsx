import React, { useState, useEffect } from "react";
import { getHotels } from "../../util/api/hotel";
import * as R from "./Reservation.style";

const Reservation = () => {
  const [hotels, setHotels] = useState<any[]>([]);
  const [searchItem, setSearchItem] = useState("");

  const searchHandle = (e:any) => setSearchItem(e.target.value);

  const onSearch = (searchTerm:string) =>{
    setSearchItem(searchTerm);
    console.log(searchTerm)
  }

  useEffect(() => {
      getHotels()
      .then((res)=>{
        setHotels(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  
  return(
    <>
      <h2>예약하기</h2>
      <div>
        <input 
          type="text" 
          placeholder="Search"
          value={searchItem} 
          onChange={searchHandle}
        />
        <button onClick={() => onSearch(searchItem)}>search</button>
      </div>
      <R.Dropdown>
        {hotels
          .filter((item) => {
            const searchTerm = searchItem.toLowerCase();
            const fullName = item.full_name.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div
              onClick={() => onSearch(item.full_name)}
              key={item.full_name}
            >
              {item.full_name}
            </div>
          ))}
      </R.Dropdown>
      {hotels.map((val, key) => {
        return(
          <div key={key}>

          </div>
        );
      })}
    </>
  );
};

export default Reservation;