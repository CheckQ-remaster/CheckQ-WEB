import First from "../components/Authentication/First";
import Register from "../components/Authentication/register";
import Reservation from "../components/Authentication/Reservation";
import NotFound from "components/common/NotFound";

const routes = [
  { path: "", component: <First />, nav: true, footer: true },
  { path: "*", component: <NotFound />, nav: false, footer: false },
  { path: "register", component: <Register />, nav: false, footer: false },
  { path: "reservation", component: <Reservation />, nav: true, footer: true },
];

export default routes;
// 이곳에 컴포넌트를 등록하면 됩니다
// path: 컴포넌트가 나올 url
// component: 띄워줄 컴포넌트
// nav: 네브바를 띄워줄지
// footer: 푸터를 띄워줄지
