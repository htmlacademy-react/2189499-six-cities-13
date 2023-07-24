import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import HomePage from '../../pages/home-page/home-page.tsx';
import FavoritePage from '../../pages/favorite-page/favorite-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import ErrorPage from '../../pages/error-page/error-page.tsx';
import '../../app.css';
import PrivateRoute from '../../components/private-route.tsx';
import { OfferCard } from '../../types/offer.ts';

type AppScreenProps = {
  countPlaces: number;
  offers: OfferCard[];
}

function App({ countPlaces, offers }: AppScreenProps): JSX.Element {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<HomePage countPlaces={countPlaces} offers={offers}/>} />
        <Route path={AppRoute.Login} element={<LoginPage />}>
        </Route>

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritePage offers={offers}/>
            </PrivateRoute>
          }
        >

        </Route>
        <Route 
        path={AppRoute.Offer} 
        element={<OfferPage />}>
        </Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
