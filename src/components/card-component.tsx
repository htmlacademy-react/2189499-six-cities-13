import { Offer, OfferCard } from "../types/offer";
import { Link } from "react-router-dom";
import { AppRoute } from "../const";

type CardComponentProps = Offer & {
  handleCardMouseEnter: () => void;
  handleCardMouseLeave: () => void;
};

function CardComponent(prop: CardComponentProps): JSX.Element {
  const {title, type, price, rating, id, isPremium} = prop;
  console.log({type});
  return (
    <article className="cities__card place-card"
    >
      {isPremium ? 
      <div className="place-card__mark">
        <span>Premium</span>
      </div> :
      ''
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}${id}`}>
          <img
            className="place-card__image"
            src="img/apartment-02.jpg"
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {(rating == 1) ? <span style={{width: '20%'}}></span>: ''}
            {(rating == 2) ? <span style={{width: '40%'}}></span>: ''}
            {(rating == 3) ? <span style={{width: '60%'}}></span>: ''}
            {(rating == 4) ? <span style={{width: '80%'}}></span>: ''}
            {(rating == 5) ? <span style={{width: '100%'}}></span>: ''}
            <span className="visually-hidden"></span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <Link to={`${AppRoute.Offer}${id}`}>{type}</Link>
      </div>
    </article>
  );
}

export default CardComponent;
