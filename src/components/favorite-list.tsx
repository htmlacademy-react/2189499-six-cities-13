import FavoriteCardComponent from "./favorite-card";
import { Offer } from "../types/offer";

type FavoriteListProps = {
  offers: Offer[];
}

function FavoriteListComponent({offers}: FavoriteListProps): JSX.Element {  
return (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>Amsterdam</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {
        offers.map(offer => (<FavoriteCardComponent key={offer.id} offer={offer}/>))
      }
    </div>
  </li>

  )
};
    
export default FavoriteListComponent;
