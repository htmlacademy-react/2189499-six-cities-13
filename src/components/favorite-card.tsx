import { Offer } from '../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

type FavoriteCardProps = Offer & {
  handleCardMouseEnter: () => void;
  handleCardMouseLeave: () => void;
};

function FavoriteCardComponent(prop: FavoriteCardProps): JSX.Element {
  const { id, isPremium, price, rating, type, title, previewImage, handleCardMouseEnter, handleCardMouseLeave,} = prop;
  return (
    <article className="favorites__card place-card"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {
        isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> :
          ''
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {(rating === 1) ? <span style={{width: '20%'}}></span> : ''}
            {(rating === 2) ? <span style={{width: '40%'}}></span> : ''}
            {(rating === 3) ? <span style={{width: '60%'}}></span> : ''}
            {(rating === 4) ? <span style={{width: '80%'}}></span> : ''}
            {(rating === 5) ? <span style={{width: '100%'}}></span> : ''}
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteCardComponent;
