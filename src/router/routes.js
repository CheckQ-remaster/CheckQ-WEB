import First from "../components/Authentication/First";
import Register from "../components/Authentication/register";
import Reservation from "../components/Authentication/Reservation";
import NotFound from "components/common/NotFound";
import Login from "components/Authentication/login";
import Home from "components/Authentication/home";
import QrCode from "components/Authentication/qrCode";

const routes = [
  { path: "", component: <First />, nav: false, header: false },
  { path: "*", component: <NotFound />, nav: false, header: false },
  { path: "login", component: <Login />, nav: false, header: false },
  { path: "register", component: <Register />, nav: false, header: false },
  { path: "home", component: <Home />, nav: true, header: false },
  { path: "reservation", component: <Reservation />, nav: true, header: true },
  { path: "qrcode", component: <QrCode />, nav: true, header: true },
];

export default routes;
// 이곳에 컴포넌트를 등록하면 됩니다
// path: 컴포넌트가 나올 url
// component: 띄워줄 컴포넌트
// nav: 네브바를 띄워줄지
// footer: 푸터를 띄워줄지
