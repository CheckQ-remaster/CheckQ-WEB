import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import * as S from "./Calender.style";

const Calender = ({ peopleCnt }: { peopleCnt: number[] }) => {
  const [roomInfo, setRoomInfo] = useState([
    {
      img: "../../assets/image/Reservation/hotelRoom1.png",
      name: "스탠다드 트윈룸",
      people: "2",
    },
  ]);

  const d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [days, setDays] = useState(dayjs());
  const [start, setStart] = useState<String>(days.format("YYYY-MM-DD"));
  const [end, setEnd] = useState(days.format("YYYY-MM-DD"));
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle((prev) => !prev);
  };

  const changeDays = (time: number) => {
    setDays(dayjs(days.add(time, "month")));
  };

  const changeDate = (time: number) => {
    setStart(`${days.get("year")}-${days.get("month") + 1}-${time}`);
  };

  const changeDate2 = (e: any, time: number) => {
    e.preventDefault();
    setEnd(`${days.get("year")}-${days.get("month") + 1}-${time}`);
  };

  useEffect(() => {
    console.log(start);
    console.log(end);
  }, [start, end]);

  const getID = (number: number) => {
    console.log(days.get("year") + "-" + days.get("month") + "-" + (number + 1) + " + " + start);
    if (
      Number(start.split("-")[0]) === days.get("year") &&
      Number(start.split("-")[1]) === days.get("month") + 1 &&
      Number(start.split("-")[2]) === number + 1
    ) {
      return "start";
    } else if (
      Number(end.split("-")[0]) === days.get("year") &&
      Number(end.split("-")[1]) === days.get("month") + 1 &&
      Number(end.split("-")[2]) === number + 1
    ) {
      return "end";
    } else {
      return "";
    }
  };

  const [people, setPeople] = useState(1);
  const [peopleToggle, setPeoplToggle] = useState(false);

  const changePeopleToggle = () => {
    setPeoplToggle((prev) => !prev);
  };

  return (
    <>
      {toggle ? (
        <S.Container>
          <S.DateInfo>
            <button onClick={() => changeDays(-1)} />
            <p>
              {days.get("year")}년 {days.get("month") + 1}월
            </p>
            <button onClick={() => changeDays(1)} />
          </S.DateInfo>
          <S.CalenderUI>
            {d.map((v, idx) => (
              <S.CalendarStair key={idx}>{v}</S.CalendarStair>
            ))}
            {d.slice(0, d.indexOf(days.format("ddd"))).map((v, idx) => (
              <S.CalendarStair key={idx}></S.CalendarStair>
            ))}
            {new Array(Number(days.daysInMonth())).fill(1).map((v, idx) => (
              <S.CalendarStair
                key={idx}
                onClick={() => changeDate(idx + 1)}
                onContextMenu={(e) => changeDate2(e, idx + 1)}
                id={getID(idx)}
              >
                {idx + 1}
              </S.CalendarStair>
            ))}
          </S.CalenderUI>
          <S.Check onClick={changeToggle}>확인</S.Check>
        </S.Container>
      ) : (
        <>
          <S.Date>
            <p>
              {dayjs(String(start)).format("MM월 DD일")} ~ {dayjs(String(end)).format("MM월 DD일")}
            </p>
            <button onClick={changeToggle} />
          </S.Date>

          {peopleToggle ? (
            <S.PeopleContainer>
              {peopleCnt.map((v) => {
                return (
                  <S.PeopleCnt key={v} onClick={changePeopleToggle}>
                    {v}인
                  </S.PeopleCnt>
                );
              })}
            </S.PeopleContainer>
          ) : (
            <S.People>
              <p>{people}인</p>
              <button onClick={changePeopleToggle} />
            </S.People>
          )}
        </>
      )}
    </>
  );
};

export default Calender;
