import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Redirect from "../src/components/common/Redirect";

// import NavBar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";
// import NotFound from "./NotFound";

import LoginPage from "./pages/login/LoginPage";
import HotelInfoPage from "./pages/hotelInfo/HotelInfoPage";
import Mainpage from "./pages/main/MainPage";
import MyReservationPage from "./pages/myReservation/MyReservationPage";
import PaymentPage from "./pages/payment/PaymentPage";
import QrPage from "./pages/qr/qrPage";
import RegisterPage from "./pages/register/registerPage";
import ReservationPage from "./pages/reservation/ReservationPage";
import RoomInfo from "./pages/roomInfo/RoomInfoPage";

import ScrollToTop from "../src/components/common/ScrollToTop";

import { userData } from "./store/user/userData";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";

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
            <Route path="/" element={<Mainpage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign_up" element={<RegisterPage/>} />
            {/* 테스트 */}
            {/* 호텔 정보 */}
            <Route path="/hotel" element={<HotelInfoPage/>} />
            {/* 방 정보 */}
            <Route path="/room" element={<RoomInfo/>} />
            {/* 예약하기 */}
            <Route path="/reservation" element={<ReservationPage/>} />
            {/* 결제 */}
            <Route path="/payment" element={<PaymentPage/>} />
            {/* 나의 예약*/}
            <Route path="/myPage" element={<MyReservationPage/>} />
            <Route path="/qrcode" element={<QrPage />} />   
          </>
        ) : (
          <>
            <Route path="/" element={<Mainpage />} />
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
