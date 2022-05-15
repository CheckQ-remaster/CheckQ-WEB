import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Redirect from "../src/components/common/Redirect";

// import NavBar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";
// import NotFound from "./NotFound";

import Login from "../src/components/Authentication/Login/login.jsx";
// import Joinpage from "./components/Authentication/JoinPage";
// import Register from "./components/Register/RegisterProblem";
import ScrollToTop from "../src/components/common/ScrollToTop";

import userData from "../src/components/common/userData";
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
            <Route path="/login" element={<Login />} />
            {/* <Route path="/join" element={<Joinpage />} /> */}
          </>
        ) : (
          <>
            {/* <Route path="/" element={<Mainpage />} /> */}
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
