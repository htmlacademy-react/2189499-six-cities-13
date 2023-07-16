import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import HomePage from '../../pages/home-page';
import FavoritePage from '../../pages/favorite-page';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import ErrorPage from './error-page';
import '../../app.css';
import PrivateRoute from './private-route.tsx';


type AppScreenProps = {
  countPlaces: number;
}

function App({ countPlaces }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<HomePage countPlaces={countPlaces} />} />
        <Route path={AppRoute.Login} element={<LoginPage />}>
        </Route>

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritePage />
            </PrivateRoute>
          }
        >

        </Route>
        <Route path={AppRoute.Offer} element={<OfferPage />}>
        </Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
