import FavoriteCardComponent from './favorite-card';
import { Offer } from '../types/offer';
import {useState} from 'react';

type FavoriteListProps = {
  offers: Offer[];
}

function FavoriteListComponent({offers}: FavoriteListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState('');

  const handleCardMouseEnter = (id: string) => {
    setActiveCard(id);
  };

  const handleCardMouseLeave = () => {
    setActiveCard('');
  };
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
          offers.map((offer) => (
            <FavoriteCardComponent
              key={offer.id}
              {...offer}
              handleCardMouseEnter={() => handleCardMouseEnter(offer.id)}
              handleCardMouseLeave={() => handleCardMouseLeave()}
            />)
          )
        }
      </div>
    </li>
  );
}

export default FavoriteListComponent;
