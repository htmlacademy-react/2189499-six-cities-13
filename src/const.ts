const CountPlaces = {
  Count: 5,
} as const;

export enum AppRoute {
  Main='/',
  Login='/login',
  Favorites='/favorites',
  Offer='/offer',
}

export default CountPlaces;
