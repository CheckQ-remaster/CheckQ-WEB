import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as N from "./NavBar.style";

const NavBar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname.split('/')[1]);
  
  return (
    <N.Contaienr>
      <N.NavWrapper>
        <N.NavItem current={currentPage} text={"home"} href="/home">
          <div></div>
          <span>홈</span>
        </N.NavItem>
        <N.NavItem current={currentPage} text={"reservation"} href="/reservation">
          <div></div>
          <span>예약</span>
        </N.NavItem>
        <N.NavItem current={currentPage} text={"my"} href="/">
          <div></div>
          <span>내 예약</span>
        </N.NavItem>
        <N.NavItem current={currentPage} text={"logout"} href="/">
          <div></div>
          <span>로그아웃</span>
        </N.NavItem>
      </N.NavWrapper>
    </N.Contaienr>
  );
};

export default NavBar;
