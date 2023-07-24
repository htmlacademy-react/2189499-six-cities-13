import LogoComponent from '../../components/logo.tsx';
import LoginComponent from '../../components/login-component.tsx';
import { Offers } from '../../types/offer.ts';
import FavoriteListComponent from '../../components/favorite-list.tsx';

type FavoriteCardProps = {
  offers: Offers;
}

function FavoritePage({offers}: FavoriteCardProps): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoComponent />
            </div>
            <LoginComponent />
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteListComponent offers={offers}/>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritePage;
