import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userData } from "./store/user/userData";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";

import ScrollToTop from "./components/common/ScrollToTop";

import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Main from "./components/Main";
import HotelInfo from "./components/HotelInfo";
import RoomInfo from "./components/RoomInfo";
import Reservation from "./components/Reservation";
import Payment from "./components/Payment";
import MyReservation from "./components/MyReservation";
import Qr from "./components/Qr";

const AppRouter = () => {
  const [getUserData, setUserData] = useRecoilState(userData);
  useEffect(() => {
    axios
      .post("/user/userinfo")
      .then((response) => setUserData(response.data))
      .catch((error) => setUserData(null));
    // .catch((error) => setUserData(1));
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <NavBar /> */}
      <Routes>
        {getUserData === null ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* 테스트 */}
            <Route path="/" element={<Main />} />
            {/* 호텔 정보 */}
            <Route path="/hotel" element={<HotelInfo />} />
            {/* 방 정보 */}
            <Route path="/room" element={<RoomInfo />} />
            {/* 예약하기 */}
            <Route path="/reservation" element={<Reservation />} />
            {/* 결제 */}
            <Route path="/payment" element={<Payment />} />
            {/* 나의 예약*/}
            <Route path="/myPage" element={<MyReservation />} />
            {/* QR */}
            <Route path="/qrcode" element={<Qr />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Main />} />
            {/* <Route path="/problems" element={<Problems />} />
            <Route path="/problem/:number" element={<Problem />} />
            <Route path="/workbook" element={<Workbooks />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/QandA" element={<QnA />} />
            <Route path="/QandA/:number" element={<QnAPage />} />
            <Route path="/Group" element={<Groups />} />
            <Route path="/memo" element={<Memos />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registerWorkbook" element={<RegisterWorkbook />} />
            <Route path="/registerQuestion" element={<RegisterQuestion />} /> */}
          </>
        )}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
export default AppRouter;
