import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as N from "./NavBar.style";

import home from "../../../assets/image/Icon/home.png";
import my from "../../../assets/image/Icon/my.png";
import reservation from "../../../assets/image/Icon/reservation.png";
import logout from "../../../assets/image/Icon/logout.png";
import focushome from "../../../assets/image/Icon/focushome.png";
import focusmy from "../../../assets/image/Icon/focusmy.png";
import focusreservation from "../../../assets/image/Icon/focusreservation.png";
import focuslogout from "../../../assets/image/Icon/focuslogout.png";

const NavBar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname.split('/')[1]);
  
  useEffect(() => {
    if(currentPage === "qrcode"){
      setCurrentPage("my")
    }
  },[currentPage]);

  return (
    <N.Contaienr>
      <N.NavWrapper>
        <N.NavItem current={currentPage} text={"home"} href="/home">
          <div>
            <img src={currentPage === "home" ? focushome : home} alt="홈" />
          </div>
          <span>홈</span>
        </N.NavItem>
        <N.NavItem current={currentPage} text={"reservation"} href="/reservation">
          <div>
            <img src={currentPage === "reservation" ? focusreservation : reservation} alt="예약" />
          </div>
          <span>예약</span>
        </N.NavItem>
        <N.NavItem current={currentPage} text={"my"} href="/">
          <div>
            <img src={currentPage === "my" ? focusmy : my} alt="내 예약" />
          </div>
          <span>내 예약</span>
        </N.NavItem>
        <N.NavItem current={currentPage} text={"logout"} href="/">
          <div>
            <img src={currentPage === "logout" ? focuslogout : logout} alt="로그아웃" />
          </div>
          <span>로그아웃</span>
        </N.NavItem>
      </N.NavWrapper>
    </N.Contaienr>
  );
};

export default NavBar;
