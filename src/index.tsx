import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import Loding from 'components/common/Loding';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<Loding/>}>
        <App/>
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
