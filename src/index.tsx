import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';

// ReactDOM.render(
//   <React.StrictMode>
//     <RecoilRoot>
//       <App/>
//     </RecoilRoot>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App/>
    </RecoilRoot>
  </React.StrictMode>
);