import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import CountPlaces from './const';
import {offers} from './moks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      countPlaces={CountPlaces.Count}
      offers={offers}
    />
  </React.StrictMode>
);
