import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userData } from "./store/user/userData";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";

import ScrollToTop from "./components/common/ScrollToTop";

import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/register";

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
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        ) : (
          <></>
        )}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
export default AppRouter;
