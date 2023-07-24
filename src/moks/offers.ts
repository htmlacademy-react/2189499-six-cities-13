import {OfferCard} from '../types/offer';

export const offers: OfferCard[] = [
  {
    id: "1",
    title: "Beautiful & luxurious studio at great location",
    type: "apartment",
    price: 120,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 3,
    previewImage: "https://url-to-image/image.png",
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host: {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images: [
      "https://url-to-image/image.png"
    ],
    maxAdults: 4
  }, 

  {
    id: "2",
    title: "Beautiful & luxurious studio at great location",
    type: "apartment",
    price: 120,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: "https://url-to-image/image.png",
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host: {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images: [
      "https://url-to-image/image.png"
    ],
    maxAdults: 4
  }, 

]
